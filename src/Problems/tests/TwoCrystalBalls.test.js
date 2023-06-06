// @ts-nocheck
import { describe, it, expect } from 'vitest';
import twoCrystalBalls from '../TwoCrystalBalls';

describe('twoCrystalBalls', () => {
  it('should return the exact spot where the crystal ball will break', () => {
    const array = [
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      true, true, true, true, true,
      true, true, true, true, true
    ];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(25);
  });

  it('should handle the case where the crystal ball will not break', () => {
    const array = [
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false
    ];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(-1);
  });

  it('should handle the case where the crystal ball breaks at the beginning', () => {
    const array = [
      true, true, true, true, true,
      true, true, true, true, true,
      true, true, true, true, true,
      true, true, true, true, true,
      true, true, true, true, true,
      false, false, false, false, false
    ];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(0);
  });

  it('should handle the case where the crystal ball breaks at the end', () => {
    const array = [
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, true
    ];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(29);
  });

  it('should handle the case where the crystal ball breaks within the given constraints', () => {
    const array = [
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, false, false,
      false, false, false, true, true,
      true, true, true, true, true
    ];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(23);
  });

  it('should handle the case where the crystal ball breaks outside the given constraints', () => {
    const array = [];

    const result = twoCrystalBalls(array);

    expect(result).toEqual(-1);
  });
});
