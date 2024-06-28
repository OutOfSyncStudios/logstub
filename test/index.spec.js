import { describe, expect, test as it } from '@jest/globals';
import LogStub from '../index.js';
import MyModule from '../index.js';

describe('logstub', () => {
  const logger = new LogStub();

  it('load', () => {
    const myClass = new MyModule();
    expect(myClass instanceof LogStub).toBe(true);
  });

  it('log', () => {
    expect(logger.log()).toBe(undefined);
  });

  it('silly', () => {
    expect(logger.silly()).toBe(undefined);
  });

  it('debug', () => {
    expect(logger.debug()).toBe(undefined);
  });

  it('verbose', () => {
    expect(logger.verbose()).toBe(undefined);
  });

  it('info', () => {
    expect(logger.info()).toBe(undefined);
  });

  it('warn', () => {
    expect(logger.warn()).toBe(undefined);
  });

  it('error', () => {
    expect(logger.error()).toBe(undefined);
  });

  // Log4J errors
  it('fatal', () => {
    expect(logger.fatal()).toBe(undefined);
  });

  it('trace', () => {
    expect(logger.trace()).toBe(undefined);
  });

  it('all', () => {
    expect(logger.all()).toBe(undefined);
  });

  // Critical
  it('critical', () => {
    expect(logger.critical()).toBe(undefined);
  });

  it('http', () => {
    expect(logger.http()).toBe(undefined);
  });

  // Console
  it('assert', () => {
    expect(logger.assert()).toBe(undefined);
  });

  it('clear', () => {
    expect(logger.clear()).toBe(undefined);
  });

  it('count', () => {
    expect(logger.count()).toBe(undefined);
  });

  it('countReset', () => {
    expect(logger.countReset()).toBe(undefined);
  });

  it('dir', () => {
    expect(logger.dir()).toBe(undefined);
  });

  it('dirxml', () => {
    expect(logger.dirxml()).toBe(undefined);
  });

  it('group', () => {
    expect(logger.group()).toBe(undefined);
  });

  it('groupCollapsed', () => {
    expect(logger.groupCollapsed()).toBe(undefined);
  });

  it('groupEnd', () => {
    expect(logger.groupEnd()).toBe(undefined);
  });

  it('table', () => {
    expect(logger.table()).toBe(undefined);
  });

  it('time', () => {
    expect(logger.time()).toBe(undefined);
  });

  it('timeEnd', () => {
    expect(logger.timeEnd()).toBe(undefined);
  });

  it('timeLog', () => {
    expect(logger.timeLog()).toBe(undefined);
  });

  // Bunyan
  it('level', () => {
    expect(logger.level()).toBe(30);
  });

  it('child', () => {
    expect(logger.child()).toBe(logger);
  });

  // Stack Driver
  it('emergency', () => {
    expect(logger.emergency()).toBe(undefined);
  });

  it('alert', () => {
    expect(logger.alert()).toBe(undefined);
  });

  it('notify', () => {
    expect(logger.notify()).toBe(undefined);
  });
});
