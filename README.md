# Caster demo app

A small web app for trying Caster from a GitHub link. One page at `/`, a health check at `/healthz`, and no dependencies.

It fits what Caster builds today: a `Dockerfile` at the root, listening on port 8080, running as a numeric non-root user, on a base image that has an arm64 build.

Run it yourself with `npm start` (Node 22 or later), then open http://localhost:8080.
