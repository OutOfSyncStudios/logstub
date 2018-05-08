const chai = require('chai');
const expect = chai.expect;

describe('logstub', () => {
  const LogStub = require('..');
  const logger = new LogStub();

  it('load', () => {
    const MyModule = require('..');
    const myClass = new MyModule();

    expect(myClass).to.be.instanceof(LogStub);
  });

  it('Log', () => {
    expect(logger.log()).to.be.equal(undefined);
  });

  it('silly', () => {
    expect(logger.silly()).to.be.equal(undefined);
  });

  it('debug', () => {
    expect(logger.debug()).to.be.equal(undefined);
  });

  it('verbose', () => {
    expect(logger.verbose()).to.be.equal(undefined);
  });

  it('info', () => {
    expect(logger.info()).to.be.equal(undefined);
  });

  it('warn', () => {
    expect(logger.warn()).to.be.equal(undefined);
  });

  it('error', () => {
    expect(logger.error()).to.be.equal(undefined);
  });

  // Log4J errors
  it('fatal', () => {
    expect(logger.fatal()).to.be.equal(undefined);
  });

  it('trace', () => {
    expect(logger.trace()).to.be.equal(undefined);
  });

  it('all', () => {
    expect(logger.all()).to.be.equal(undefined);
  });

  // Critical
  it('critical', () => {
    expect(logger.critical()).to.be.equal(undefined);
  });

});
