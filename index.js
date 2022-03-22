  - name: Upload to codecov.io
        uses: codecov/codecov-action@v1
        with:
          fail_ci_if_error: true
          fail_ci_if_error: false
      - name: Build release
        run: time cargo build --release --quiet --locked
      - name: Version info
