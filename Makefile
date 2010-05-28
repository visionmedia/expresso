
BIN = bin/expresso
PREFIX = /usr/local
JSCOV = deps/jscoverage/node-jscoverage

test: $(BIN)
	@./$(BIN) -I lib test/*.test.js

test-cov: $(BIN)
	@./$(BIN) -I lib --cov test/*.test.js

install: $(JSCOV) install-expresso
	install $(JSCOV) $(PREFIX)/bin

install-expresso:
	install $(BIN) $(PREFIX)/bin

$(JSCOV):
	@cd deps/jscoverage && ./configure && make && mv jscoverage node-jscoverage

clean:
	@cd deps/jscoverage && git clean -fd

.PHONY: test test-cov install install-expresso clean