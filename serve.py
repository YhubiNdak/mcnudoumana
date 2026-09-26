#!/usr/bin/env python3
"""Serve this static site locally with Vercel-style clean URLs."""

from __future__ import annotations

import argparse
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit, urlunsplit


class CleanURLRequestHandler(SimpleHTTPRequestHandler):
    """Resolve extensionless requests to matching HTML files."""

    def _resolve_clean_url(self) -> None:
        parsed = urlsplit(self.path)
        route = parsed.path

        if route == "/" or route.endswith("/"):
            return

        last_segment = route.rsplit("/", 1)[-1]
        if "." in last_segment:
            return

        html_route = f"{route}.html"
        if os.path.isfile(self.translate_path(html_route)):
            self.path = urlunsplit(
                (parsed.scheme, parsed.netloc, html_route, parsed.query, parsed.fragment)
            )

    def _disable_conditional_cache(self) -> None:
        for header in ("If-Modified-Since", "If-None-Match"):
            if header in self.headers:
                del self.headers[header]

    def end_headers(self) -> None:
        self.send_header(
            "Cache-Control", "no-store, no-cache, must-revalidate, max-age=0"
        )
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self) -> None:  # noqa: N802 - inherited HTTP handler API
        self._disable_conditional_cache()
        self._resolve_clean_url()
        super().do_GET()

    def do_HEAD(self) -> None:  # noqa: N802 - inherited HTTP handler API
        self._disable_conditional_cache()
        self._resolve_clean_url()
        super().do_HEAD()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Serve the site with extensionless HTML routes."
    )
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--bind", default="127.0.0.1")
    args = parser.parse_args()

    server = ThreadingHTTPServer((args.bind, args.port), CleanURLRequestHandler)
    print(f"Serving on http://{args.bind}:{args.port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
