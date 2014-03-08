MOCHA    = ./node_modules/.bin/mocha
REPORTER = spec
REQUIRE  = should

test:
	@NODE_ENV=test $(MOCHA) \
										--require $(REQUIRE) \
										--reporter $(REPORTER)

test-nc:
	@NODE_ENV=test $(MOCHA) \
										--require $(REQUIRE) \
										--reporter $(REPORTER) \
										--no-colors

test-w:
	@NODE_ENV=test $(MOCHA) \
										--require $(REQUIRE) \
										--reporter min \
										--bail \
										--watch

test-cov:
	@rm -rf .coverage
	@mkdir -p .coverage
	@jscoverage --exclude=cli-runner.js lib .coverage/lib
	@COLOR_DIFFERENCE_COVERAGE=1 $(MAKE) --silent test REPORTER=html-cov > .coverage/index.html

.PHONY: test test-w test-cov
