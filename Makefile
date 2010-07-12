
BIN = bin/expresso
PREFIX = /usr/local
JSCOV = deps/jscoverage/node-jscoverage

test: $(BIN)
	@./$(BIN) -I lib --growl $(TEST_FLAGS) test/*.test.js

test-cov:
	@./$(BIN) -I lib --cov $(TEST_FLAGS) test/*.test.js

install: install-jscov install-expresso

uninstall:
	rm -f $(PREFIX)/bin/expresso
	rm -f $(PREFIX)/bin/node-jscoverage

install-jscov: $(JSCOV)
	install $(JSCOV) $(PREFIX)/bin

install-expresso:
	install $(BIN) $(PREFIX)/bin

$(JSCOV):
	cd deps/jscoverage && ./configure && make && mv jscoverage node-jscoverage

clean:
	@cd deps/jscoverage && git clean -fd

.PHONY: test test-cov install uninstall install-expresso install-jscov clean