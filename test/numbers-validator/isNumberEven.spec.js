
import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe("isNumberEven posituve tests", () => {
  let validator;
  beforeEach(() => {
    validator  = new NumbersValidator();
  });

  it("should return true when provided with an even number", () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

});
