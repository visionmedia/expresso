
BIN = bin/expresso
PREFIX = /usr/local
JSCOV = deps/jscoverage/node-jscoverage

test: $(BIN)
	@./$(BIN) -I lib test/*.test.js

test-cov: $(BIN)
	@./$(BIN) -I lib --cov test/*.test.js

install: install-jscov install-expresso
	git submodule update --init

install-jscov: $(JSCOV)
	install $(JSCOV) $(PREFIX)/bin

install-expresso:
	install $(BIN) $(PREFIX)/bin

$(JSCOV):
	cd deps/jscoverage && ./configure && make && mv jscoverage node-jscoverage

clean:
	@cd deps/jscoverage && git clean -fd

.PHONY: test test-cov install install-expresso install-jscov clean