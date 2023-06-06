// @ts-nocheck
import { describe, it, expect } from 'vitest';
import Vector2D from '../Vector2D';

describe('Vector2D', () => {
  describe('constructor', () => {
    it('should set x and y properties to 0(default) if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(vector.x).toEqual(0);
      expect(vector.y).toEqual(0);
    });
    it('should set x and y properties to the passed arguments', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.x).toEqual(3);
      expect(vector.y).toEqual(4);
    });
    it('should set x property to the passed argument and y to 0(default)', () => {
      const vector = new Vector2D(5);
      expect(vector.x).toEqual(5);
      expect(vector.y).toEqual(0);
    });
    it('should freeze the object after creation', () => {
      const vector = new Vector2D();
      expect(Object.isFrozen(vector)).toBe(true);
    });
  });

  describe('static getters', () => {
    it('should return a new vector with the given values when accessing UP', () => {
      const up = Vector2D.UP;
      expect(up).toBeInstanceOf(Vector2D);
      expect(up.x).toEqual(0);
      expect(up.y).toEqual(1);
    });
    it('should return a new vector with the given values when accessing LEFT', () => {
      const left = Vector2D.LEFT;
      expect(left).toBeInstanceOf(Vector2D);
      expect(left.x).toEqual(-1);
      expect(left.y).toEqual(0);
    });
    it('should return a new vector with the given values when accessing DOWN', () => {
      const down = Vector2D.DOWN;
      expect(down).toBeInstanceOf(Vector2D);
      expect(down.x).toEqual(0);
      expect(down.y).toEqual(-1);
    });
    it('should return a new vector with the given values when accessing RIGHT', () => {
      const right = Vector2D.RIGHT;
      expect(right).toBeInstanceOf(Vector2D);
      expect(right.x).toEqual(1);
      expect(right.y).toEqual(0);
    });
  });

  describe('x and y setter/getter', () => {
    it('should set the x value of the Vector2D', () => {
      const vector = new Vector2D(10, 5);
      vector.x = 20;
      expect(vector.x).toEqual(20);
    });
    it('should throw an error when trying to set a non-numeric value to x', () => {
      const vector = new Vector2D();
      expect(() => (vector.x = 'not a number')).toThrow(TypeError);
    });
    it('should return the x value of the Vector2D', () => {
      const vector = new Vector2D(10, 5);
      expect(vector.x).toEqual(10);
    });
    it('should set the y value of the Vector2D', () => {
      const vector = new Vector2D(10, 5);
      vector.y = 20;
      expect(vector.y).toEqual(20);
    });
    it('should throw an error when trying to set a non-numeric value to y', () => {
      const vector = new Vector2D();
      expect(() => (vector.y = {})).toThrow(TypeError);
    });
    it('should return the y value of the Vector2D', () => {
      const vector = new Vector2D(10, 5);
      expect(vector.y).toEqual(5);
    });
  });

  describe('getters', () => {
    it('should return the correct width and height values', () => {
      const vector = new Vector2D(2, 3);
      expect(vector.width).toEqual(2);
      expect(vector.height).toEqual(3);
    });
    it('should return the correct magnitude value', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.magnitude).toEqual(5);
    });
    it('should return the correct length value', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.length).toEqual(5);
    });
    it('should return the correct direction value', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.direction).toBeCloseTo(0.93, 2);
    });
    it('should return the correct angle value', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.angle).toBeCloseTo(0.93, 2);
    });
    it('should return the correct absoluteX and absoluteY values', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(-2, -3);
      expect(vector1.absoluteX).toEqual(2);
      expect(vector2.absoluteY).toEqual(3);
      expect(vector1.absoluteX).toEqual(2);
      expect(vector2.absoluteY).toEqual(3);
    });
  });

  describe('set method', () => {
    it('should set the x and y values of a vector', () => {
      const vector = new Vector2D();
      vector.set(10, 20);
      expect(vector.x).toEqual(10);
      expect(vector.y).toEqual(20);
    });
    it('should set the x and y values of a vector to the same value if only one argument is passed', () => {
      const vector = new Vector2D();
      vector.set(5);
      expect(vector.x).toEqual(5);
      expect(vector.y).toEqual(5);
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.set()).toThrow(TypeError);
    });
    it('should throw a TypeError if the x value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.set('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the y value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.set(10, '20')).toThrow(TypeError);
      expect(() => vector.set(10, null)).not.toThrow(TypeError);
      expect(() => vector.set(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('add method', () => {
    it('should return a new Vector2D instance', () => {
      const vector1 = new Vector2D(8, 8);
      const vector2 = new Vector2D(1, 1);
      const result = vector1.add(vector2);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector1);
    });
    it('should add two vectors and return a new vector', () => {
      const vector1 = new Vector2D(1);
      const vector2 = new Vector2D(2, 4);
      const result = vector1.add(vector2);
      expect(result.x).toEqual(3);
      expect(result.y).toEqual(4);
      expect(vector2).toStrictEqual(new Vector2D(2, 4));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.add()).toThrow(TypeError);
    });
    it('should throw a TypeError if the argument is not a Vector2D instance', () => {
      const vector = new Vector2D();
      expect(() => vector.add(10)).toThrow(TypeError);
      expect(() => vector.add('foo')).toThrow(TypeError);
      expect(() => vector.add({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('addSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.addSelf(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should add another vector to itself and return itself', () => {
      const vector1 = new Vector2D(2, 4);
      const vector2 = new Vector2D(1, 2);
      const result = vector1.addSelf(vector2);
      expect(vector1.x).toEqual(3);
      expect(vector1.y).toEqual(6);
      expect(vector2).toStrictEqual(new Vector2D(1, 2));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.addSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the argument is not a Vector2D instance', () => {
      const vector = new Vector2D();
      expect(() => vector.addSelf(10)).toThrow(TypeError);
      expect(() => vector.addSelf('foo')).toThrow(TypeError);
      expect(() => vector.addSelf({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('subtract method', () => {
    it('should return a new Vector2D instance', () => {
      const vector1 = new Vector2D(8, 8);
      const vector2 = new Vector2D(1, 1);
      const result = vector1.subtract(vector2);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector1);
    });
    it('should return a new Vector2D object with subtracted values', () => {
      const vector1 = new Vector2D(5, 7);
      const vector2 = new Vector2D(2, 3);
      const result = vector1.subtract(vector2);
      expect(result).toStrictEqual(new Vector2D(3, 4));
      expect(vector2).toStrictEqual(new Vector2D(2, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.subtract()).toThrow(TypeError);
    });
    it('should throw a TypeError when passed an invalid Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.subtract(10)).toThrow(TypeError);
      expect(() => vector.subtract('foo')).toThrow(TypeError);
      expect(() => vector.subtract({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('subtractSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.subtractSelf(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should subtract values from the Vector2D object and return itself', () => {
      const vector1 = new Vector2D(5, 7);
      const vector2 = new Vector2D(2, 3);
      const result = vector1.subtractSelf(vector2);
      expect(result).toStrictEqual(new Vector2D(3, 4));
      expect(vector2).toStrictEqual(new Vector2D(2, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError when passed an invalid Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractSelf(10)).toThrow(TypeError);
      expect(() => vector.subtractSelf('foo')).toThrow(TypeError);
      expect(() => vector.subtractSelf({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('multiply method', () => {
    it('should return a new Vector2D instance', () => {
      const vector1 = new Vector2D(8, 8);
      const vector2 = new Vector2D(1, 1);
      const result = vector1.multiply(vector2);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector1);
    });
    it('should return a new Vector2D object with multiplied values', () => {
      const vector1 = new Vector2D(5, 7);
      const vector2 = new Vector2D(2, 3);
      const result = vector1.multiply(vector2);
      expect(result).toStrictEqual(new Vector2D(10, 21));
      expect(vector2).toStrictEqual(new Vector2D(2, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.multiply()).toThrow(TypeError);
    });
    it('should throw a TypeError when passed an invalid Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.multiply(10)).toThrow(TypeError);
      expect(() => vector.multiply('foo')).toThrow(TypeError);
      expect(() => vector.multiply({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('multiplySelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.multiplySelf(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should multiply values of the Vector2D object and return itself', () => {
      const vector1 = new Vector2D(5, 7);
      const vector2 = new Vector2D(2, 3);
      const result = vector1.multiplySelf(vector2);
      expect(result).toStrictEqual(new Vector2D(10, 21));
      expect(vector2).toStrictEqual(new Vector2D(2, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplySelf()).toThrow(TypeError);
    });
    it('should throw a TypeError when passed an invalid Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplySelf(10)).toThrow(TypeError);
      expect(() => vector.multiplySelf('foo')).toThrow(TypeError);
      expect(() => vector.multiplySelf({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('divide method', () => {
    it('should return a new Vector2D instance', () => {
      const vector1 = new Vector2D(8, 8);
      const vector2 = new Vector2D(1, 1);
      const result = vector1.divide(vector2);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector1);
    });
    it('should divide the vector by the argument vector and return a new Vector2D instance', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(2, 2);
      const result = vector1.divide(vector2);
      expect(result).toStrictEqual(new Vector2D(1, 1.5));
      expect(vector2).toStrictEqual(new Vector2D(2, 2));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.divide()).toThrow(TypeError);
    });
    it('should throw a TypeError if the argument is not a Vector2D instance', () => {
      const vector = new Vector2D();
      expect(() => vector.divide(10)).toThrow(TypeError);
      expect(() => vector.divide('foo')).toThrow(TypeError);
      expect(() => vector.divide({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('divideSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.divideSelf(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should divide the vector by the argument vector and return the instance', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(2, 2);
      const result = vector1.divideSelf(vector2);
      expect(result).toStrictEqual(new Vector2D(1, 1.5));
      expect(vector2).toStrictEqual(new Vector2D(2, 2));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.divideSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the argument is not a Vector2D instance', () => {
      const vector = new Vector2D();
      expect(() => vector.divideSelf(10)).toThrow(TypeError);
      expect(() => vector.divideSelf('foo')).toThrow(TypeError);
      expect(() => vector.divideSelf({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('clamp method', () => {
    it('should return a new Vector2D instance', () => {
      const vector1 = new Vector2D(8, 8);
      const result = vector1.clamp(new Vector2D(1, 1), new Vector2D(1, 1));
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector1);
    });
    it('should return a new Vector2D instance with values clamped between minimum and maximum', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(1, 2);
      const vector3 = new Vector2D(3, 4);
      const result = vector1.clamp(vector2, vector3);
      expect(result).toStrictEqual(new Vector2D(2, 3));
      expect(vector2).toStrictEqual(new Vector2D(1, 2));
      expect(vector3).toStrictEqual(new Vector2D(3, 4));
    });
    it('should throws a TypeError if minimum or maximum is not a vector', () => {
      const vector = new Vector2D();
      expect(() => vector.clamp('not a number', vector)).toThrow(TypeError);
      expect(() => vector.clamp(vector, NaN)).toThrow(TypeError);
    });
  });

  describe('clampSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.clampSelf(new Vector2D(1, 1), new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should clamp the vector values between minimum and maximum and return the instance', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(1, 2);
      const vector3 = new Vector2D(3, 4);
      const result = vector1.clampSelf(vector2, vector3);
      expect(result).toStrictEqual(new Vector2D(2, 3));
      expect(vector2).toStrictEqual(new Vector2D(1, 2));
      expect(vector3).toStrictEqual(new Vector2D(3, 4));
    });
    it('should throws a TypeError if minimum or maximum is not a vector', () => {
      const vector = new Vector2D();
      expect(() => vector.clampSelf('not a number', vector)).toThrow(TypeError);
      expect(() => vector.clampSelf(vector, NaN)).toThrow(TypeError);
    });
  });

  describe('addScalar method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.addScalar(1, 1);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should add scalar to x and y coordinates and return a new Vector2D object', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.addScalar(4);
      expect(result).toStrictEqual(new Vector2D(6, 7));
      expect(vector).toStrictEqual(new Vector2D(2, 3));
    });
    it('should add scalar to x and scalar2 to y coordinates and return a new Vector2D object', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.addScalar(4, 5);
      expect(result).toStrictEqual(new Vector2D(6, 8));
      expect(vector).toStrictEqual(new Vector2D(2, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalar()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalar('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalar(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.addScalar(10, NaN)).toThrow(TypeError);
      expect(() => vector.addScalar(10, null)).not.toThrow(TypeError);
      expect(() => vector.addScalar(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('addScalarSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.addScalarSelf(1, 1);
      expect(result).toBe(vector);
    });
    it('should add scalar to x and y coordinates and return the modified Vector2D object', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.addScalarSelf(4);
      expect(result).toStrictEqual(new Vector2D(6, 7));
    });
    it('should add scalar to x and scalar2 to y coordinates and return the modified Vector2D object', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.addScalarSelf(4, 5);
      expect(result).toStrictEqual(new Vector2D(6, 8));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalarSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalarSelf('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.addScalarSelf(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.addScalarSelf(10, NaN)).toThrow(TypeError);
      expect(() => vector.addScalarSelf(10, null)).not.toThrow(TypeError);
      expect(() => vector.addScalarSelf(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('subtractScalar method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.subtractScalar(1, 1);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should subtracts a scalar from a vector and return a new Vector2D object', () => {
      const vector = new Vector2D(2, 4);
      const result = vector.subtractScalar(3);
      expect(result).toStrictEqual(new Vector2D(-1, 1));
    });
    it('should subtracts two scalars from a vector and return a new Vector2D object', () => {
      const vector = new Vector2D(2, 4);
      const result = vector.subtractScalar(3, 2);
      expect(result).toStrictEqual(new Vector2D(-1, 2));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalar()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalar('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalar(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.subtractScalar(10, NaN)).toThrow(TypeError);
      expect(() => vector.subtractScalar(10, null)).not.toThrow(TypeError);
      expect(() => vector.subtractScalar(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('subtractScalarSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.subtractScalarSelf(1, 1);
      expect(result).toBe(vector);
    });
    it('should subtracts a scalar from a vector and return the modified Vector2D object', () => {
      const vector = new Vector2D(2, 4);
      const result = vector.subtractScalarSelf(3);
      expect(result).toStrictEqual(new Vector2D(-1, 1));
    });
    it('should subtracts two scalars from a vector and return the modified Vector2D object', () => {
      const vector = new Vector2D(2, 4);
      const result = vector.subtractScalarSelf(3, 2);
      expect(result).toStrictEqual(new Vector2D(-1, 2));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalarSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalarSelf('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.subtractScalarSelf(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.subtractScalarSelf(10, NaN)).toThrow(TypeError);
      expect(() => vector.subtractScalarSelf(10, null)).not.toThrow(TypeError);
      expect(() => vector.subtractScalarSelf(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('multiplyScalar method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.multiplyScalar(1, 1);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should multiplies the vector by a scalar number and return a new Vector2D object', () => {
      const vector = new Vector2D(1, 2);
      const result = vector.multiplyScalar(2);
      expect(result).toStrictEqual(new Vector2D(2, 4));
    });
    it('should multiplies the vector by two scalars numbers and return a new Vector2D object', () => {
      const vector = new Vector2D(1, 2);
      const result = vector.multiplyScalar(2, 3);
      expect(result).toStrictEqual(new Vector2D(2, 6));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalar()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalar('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalar(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.multiplyScalar(10, NaN)).toThrow(TypeError);
      expect(() => vector.multiplyScalar(10, null)).not.toThrow(TypeError);
      expect(() => vector.multiplyScalar(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('multiplyScalarSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.multiplyScalarSelf(1, 1);
      expect(result).toBe(vector);
    });
    it('should multiplies the vector by a scalar numbers and return the modified Vector2D object', () => {
      const vector = new Vector2D(1, 2);
      const result = vector.multiplyScalarSelf(2);
      expect(result).toStrictEqual(new Vector2D(2, 4));
    });
    it('should multiplies the vector by two scalars numbers and return the modified Vector2D object', () => {
      const vector = new Vector2D(1, 2);
      const result = vector.multiplyScalarSelf(2, 3);
      expect(result).toStrictEqual(new Vector2D(2, 6));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalarSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalarSelf('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.multiplyScalarSelf(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.multiplyScalarSelf(10, NaN)).toThrow(TypeError);
      expect(() => vector.multiplyScalarSelf(10, null)).not.toThrow(TypeError);
      expect(() => vector.multiplyScalarSelf(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('divideScalar method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.divideScalar(1, 1);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should divide by a scalar number and return a new Vector2D object', () => {
      const vector = new Vector2D(6, 9);
      const result = vector.divideScalar(3);
      expect(result).toStrictEqual(new Vector2D(2, 3));
    });
    it('should divide by two scalars numbers and return a new Vector2D object', () => {
      const vector = new Vector2D(6, 9);
      const result = vector.divideScalar(2, 3);
      expect(result).toStrictEqual(new Vector2D(3, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalar()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalar('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalar(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.divideScalar(10, NaN)).toThrow(TypeError);
      expect(() => vector.divideScalar(10, null)).not.toThrow(TypeError);
      expect(() => vector.divideScalar(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('divideScalarSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.divideScalarSelf(1, 1);
      expect(result).toBe(vector);
    });
    it('should divide by a scalar number and return the modified Vector2D object', () => {
      const vector = new Vector2D(6, 9);
      const result = vector.divideScalarSelf(3);
      expect(result).toStrictEqual(new Vector2D(2, 3));
    });
    it('should divide by two scalars numbers and return the modified Vector2D object', () => {
      const vector = new Vector2D(6, 9);
      const result = vector.divideScalarSelf(2, 3);
      expect(result).toStrictEqual(new Vector2D(3, 3));
    });
    it('should throw a TypeError if no arguments are passed', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalarSelf()).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar value is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalarSelf('10', 20)).toThrow(TypeError);
    });
    it('should throw a TypeError if the scalar2 value is not a number or null/undefined', () => {
      const vector = new Vector2D();
      expect(() => vector.divideScalarSelf(10, 'not a number')).toThrow(TypeError);
      expect(() => vector.divideScalarSelf(10, NaN)).toThrow(TypeError);
      expect(() => vector.divideScalarSelf(10, null)).not.toThrow(TypeError);
      expect(() => vector.divideScalarSelf(10, undefined)).not.toThrow(TypeError);
    });
  });

  describe('clampScalar method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.clampScalar(1, 1);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should return a new Vector2D instance with values clamped to the minimum and maximum', () => {
      const vector = new Vector2D(3, 5);
      const result = vector.clampScalar(1, 4);
      expect(result.x).toEqual(3);
      expect(result.y).toEqual(4);
    });
    it('should throw a TypeError if minimum or maximum is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.clampScalar('not a number', 4)).toThrow(TypeError);
      expect(() => vector.clampScalar(1, NaN)).toThrow(TypeError);
    });
  });

  describe('clampScalarSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.clampScalarSelf(1, 1);
      expect(result).toBe(vector);
    });
    it('should return the modified Vector2D instance with values clamped to the minimum and maximum', () => {
      const vector = new Vector2D(3, 5);
      const result = vector.clampScalarSelf(1, 4);
      expect(result.x).toEqual(3);
      expect(result.y).toEqual(4);
    });
    it('should throw a TypeError if minimum or maximum is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.clampScalarSelf('not a number', 4)).toThrow(TypeError);
      expect(() => vector.clampScalarSelf(1, NaN)).toThrow(TypeError);
    });
  });

  describe('dotProduct method', () => {
    it('should return 0 when given perpendicular vectors', () => {
      const vector1 = new Vector2D(1, 0);
      const vector2 = new Vector2D(0, 1);
      const result = vector1.dotProduct(vector2);
      expect(result).toEqual(0);
      expect(vector1).toStrictEqual(new Vector2D(1, 0));
    });
    it('should return the correct result for given vectors', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(3, 4);
      const result = vector1.dotProduct(vector2);
      expect(result).toEqual(11);
      expect(vector1).toStrictEqual(new Vector2D(1, 2));
    });
    it('should throw a TypeError when vector is not an instance of Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.dotProduct(10)).toThrow(TypeError);
      expect(() => vector.dotProduct('foo')).toThrow(TypeError);
      expect(() => vector.dotProduct(NaN)).toThrow(TypeError);
      expect(() => vector.dotProduct(null)).toThrow(TypeError);
      expect(() => vector.dotProduct({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('crossProduct method', () => {
    it('should return 0 when given parallel vectors', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(2, 4);
      const result = vector1.crossProduct(vector2);
      expect(result).toEqual(0);
      expect(vector1).toStrictEqual(new Vector2D(1, 2));
    });
    it('should return the correct result for given vectors', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(3, 4);
      const result = vector1.crossProduct(vector2);
      expect(result).toEqual(-2);
      expect(vector1).toStrictEqual(new Vector2D(1, 2));
    });
    it('should throw a TypeError when vector is not an instance of Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.crossProduct(10)).toThrow(TypeError);
      expect(() => vector.crossProduct('foo')).toThrow(TypeError);
      expect(() => vector.crossProduct(NaN)).toThrow(TypeError);
      expect(() => vector.crossProduct(null)).toThrow(TypeError);
      expect(() => vector.crossProduct({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('distance method', () => {
    it('should return 0 when given the same vector', () => {
      const vector1 = new Vector2D(1, 2);
      const result = vector1.distance(vector1);
      expect(result).toEqual(0);
      expect(vector1).toStrictEqual(new Vector2D(1, 2));
    });
    it('should return the correct result for given vectors', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(4, 6);
      const result = vector1.distance(vector2);
      expect(result).toEqual(5);
      expect(vector1).toStrictEqual(new Vector2D(1, 2));
    });
    it('should throw a TypeError when vector is not an instance of Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.distance(10)).toThrow(TypeError);
      expect(() => vector.distance('foo')).toThrow(TypeError);
      expect(() => vector.distance(NaN)).toThrow(TypeError);
      expect(() => vector.distance(null)).toThrow(TypeError);
      expect(() => vector.distance({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('lerp method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.lerp(new Vector2D(1, 1), 0);
      expect(result).toBe(vector);
    });
    it('should lerp the vector correctly with alpha = 0', () => {
      const vector1 = new Vector2D(0, 0);
      const vector2 = new Vector2D(10, 20);
      const result = vector1.lerp(vector2, 0);
      expect(result.x).toEqual(0);
      expect(result.y).toEqual(0);
    });
    it('should lerp the vector correctly with alpha = 1', () => {
      const vector1 = new Vector2D(0, 0);
      const vector2 = new Vector2D(10, 20);
      const result = vector1.lerp(vector2, 1);
      expect(result.x).toEqual(10);
      expect(result.y).toEqual(20);
    });
    it('should lerp the vector correctly with 0 < alpha < 1', () => {
      const vector1 = new Vector2D(0, 0);
      const vector2 = new Vector2D(10, 20);
      const result = vector1.lerp(vector2, 0.5);
      expect(result.x).toEqual(5);
      expect(result.y).toEqual(10);
    });
    it('should throw a TypeError when vector is not an instance of Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.lerp(10, 1)).toThrow(TypeError);
      expect(() => vector.lerp('foo', 1)).toThrow(TypeError);
      expect(() => vector.lerp(NaN, 1)).toThrow(TypeError);
      expect(() => vector.lerp(null, 1)).toThrow(TypeError);
      expect(() => vector.lerp({ x: 1, y: 2 }, 1)).toThrow(TypeError);
    });
    it('should throw a TypeError when alpha is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.lerp(vector, 10)).not.toThrow(TypeError);
      expect(() => vector.lerp(vector, 'foo')).toThrow(TypeError);
      expect(() => vector.lerp(vector, NaN)).toThrow(TypeError);
      expect(() => vector.lerp(vector, null)).toThrow(TypeError);
      expect(() => vector.lerp(vector, { x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('rotate method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.rotate(new Vector2D(1, 1), 0);
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should rotate the vector around the given point by the given angle and return a new Vector2D object', () => {
      const vector = new Vector2D(2, 2);
      const result = vector.rotate(new Vector2D(1, 1), 90);
      expect(result.x).toEqual(0);
      expect(result.y).toEqual(2);
    });
    it('should throw a TypeError if the point argument is not a Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.rotate({}, 90)).toThrow(TypeError);
      expect(() => vector.rotate(null, 90)).toThrow(TypeError);
      expect(() => vector.rotate(undefined, 90)).toThrow(TypeError);
      expect(() => vector.rotate(123, 90)).toThrow(TypeError);
      expect(() => vector.rotate('point', 90)).toThrow(TypeError);
      expect(() => vector.rotate(true, 90)).toThrow(TypeError);
    });
    it('should throw a TypeError if the angle argument is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.rotate(new Vector2D(1, 1), {})).toThrow(TypeError);
      expect(() => vector.rotate(new Vector2D(1, 1), null)).toThrow(TypeError);
      expect(() => vector.rotate(new Vector2D(1, 1), undefined)).toThrow(TypeError);
      expect(() => vector.rotate(new Vector2D(1, 1), 'angle')).toThrow(TypeError);
      expect(() => vector.rotate(new Vector2D(1, 1), true)).toThrow(TypeError);
    });
  });

  describe('rotateSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.rotateSelf(new Vector2D(1, 1), 90);
      expect(result).toBe(vector);
    });
    it('should rotate the vector around the given point by the given angle and return itself', () => {
      const vector = new Vector2D(2, 2);
      const result = vector.rotateSelf(new Vector2D(1, 1), 90);
      expect(result.x).toEqual(0);
      expect(result.y).toEqual(2);
    });
    it('should throw a TypeError if the point argument is not a Vector2D object', () => {
      const vector = new Vector2D();
      expect(() => vector.rotateSelf({}, 90)).toThrow(TypeError);
      expect(() => vector.rotateSelf(null, 90)).toThrow(TypeError);
      expect(() => vector.rotateSelf(undefined, 90)).toThrow(TypeError);
      expect(() => vector.rotateSelf(123, 90)).toThrow(TypeError);
      expect(() => vector.rotateSelf('point', 90)).toThrow(TypeError);
      expect(() => vector.rotateSelf(true, 90)).toThrow(TypeError);
    });
    it('should throw a TypeError if the angle argument is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.rotateSelf(new Vector2D(1, 1), {})).toThrow(TypeError);
      expect(() => vector.rotateSelf(new Vector2D(1, 1), null)).toThrow(TypeError);
      expect(() => vector.rotateSelf(new Vector2D(1, 1), undefined)).toThrow(TypeError);
      expect(() => vector.rotateSelf(new Vector2D(1, 1), 'angle')).toThrow(TypeError);
      expect(() => vector.rotateSelf(new Vector2D(1, 1), true)).toThrow(TypeError);
    });
  });

  describe('invert method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.invert();
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should invert x and y values', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.invert();
      expect(result.x).toEqual(-2);
      expect(result.y).toEqual(-3);
    });
  });

  describe('invertSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.invertSelf();
      expect(result).toBe(vector);
    });
    it('should invert x and y values', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.invertSelf();
      expect(result.x).toEqual(-2);
      expect(result.y).toEqual(-3);
    });
  });

  describe('normalize method', () => {
    it('should return a new Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.normalize();
      expect(result).toBeInstanceOf(Vector2D);
      expect(result).not.toBe(vector);
    });
    it('should return a normalized Vector2D instance', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.normalize();
      expect(result.x).toBeCloseTo(0.55, 2);
      expect(result.y).toBeCloseTo(0.83, 2);
    });
    it('should return a Vector2D instance with x=0 and y=0 for zero vector', () => {
      const vector = new Vector2D();
      const result = vector.normalize();
      expect(result).toStrictEqual(new Vector2D());
    });
  });

  describe('normalizeSelf method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.normalizeSelf();
      expect(result).toBe(vector);
    });
    it('should normalize x and y values', () => {
      const vector = new Vector2D(2, 3);
      const result = vector.normalizeSelf();
      expect(result.x).toBeCloseTo(0.55, 2);
      expect(result.y).toBeCloseTo(0.83, 2);
    });
    it('should do nothing for zero vector', () => {
      const vector = new Vector2D();
      const result = vector.normalizeSelf();
      expect(result).toStrictEqual(new Vector2D());
    });
  });

  describe('toFixed method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.toFixed(0);
      expect(result).toBe(vector);
    });
    it('should round to the nearest integer when given no decimal places', () => {
      const vector = new Vector2D(1.5, 2.5);
      expect(vector.toFixed(0)).toStrictEqual(new Vector2D(1, 2));
    });
    it('should round to the given number of decimal places', () => {
      const vector = new Vector2D(1.567, 2.345);
      expect(vector.toFixed(2)).toStrictEqual(new Vector2D(1.57, 2.35));
    });
    it('should throw an error if decimalPlaces is not a number', () => {
      const vector = new Vector2D();
      expect(() => vector.toFixed('foo')).toThrow(TypeError);
      expect(() => vector.toFixed(NaN)).toThrow(TypeError);
      expect(() => vector.toFixed(null)).toThrow(TypeError);
      expect(() => vector.toFixed({ x: 1, y: 2 })).toThrow(TypeError);
    });
  });

  describe('ceil method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.ceil();
      expect(result).toBe(vector);
    });
    it('should round up to the nearest integer when given no decimal places', () => {
      const vector = new Vector2D(1.5, 2.5);
      expect(vector.ceil()).toStrictEqual(new Vector2D(2, 3));
    });
    it('should round up to the given number of decimal places', () => {
      const vector = new Vector2D(1.567, 2.345);
      expect(vector.ceil(1)).toStrictEqual(new Vector2D(1.6, 2.4));
    });
    it('should throw a TypeError when called with a non-number argument or not nil', () => {
      const vector = new Vector2D();
      expect(() => vector.ceil('foo')).toThrow(TypeError);
      expect(() => vector.ceil(NaN)).toThrow(TypeError);
      expect(() => vector.ceil({ x: 1, y: 2 })).toThrow(TypeError);
      expect(() => vector.ceil(null)).not.toThrow(TypeError);
    });
  });

  describe('floor method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.floor();
      expect(result).toBe(vector);
    });
    it('should round down both x and y to the nearest integer when called without arguments', () => {
      const vector = new Vector2D(3.6, 4.9);
      expect(vector.floor()).toStrictEqual(new Vector2D(3, 4));
    });
    it('should round down both x and y to the given number of decimal places', () => {
      const vector = new Vector2D(3.645, 4.983);
      expect(vector.floor(1)).toStrictEqual(new Vector2D(3.6, 4.9));
    });
    it('should throw a TypeError when called with a non-number argument', () => {
      const vector = new Vector2D();
      expect(() => vector.floor('foo')).toThrow(TypeError);
      expect(() => vector.floor(NaN)).toThrow(TypeError);
      expect(() => vector.floor({ x: 1, y: 2 })).toThrow(TypeError);
      expect(() => vector.floor(null)).not.toThrow(TypeError);
    });
  });

  describe('round method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.round();
      expect(result).toBe(vector);
    });
    it('should round down both x and y to the nearest integer when called without arguments', () => {
      const vector = new Vector2D(3.4, 4.5);
      expect(vector.round()).toStrictEqual(new Vector2D(3, 5));
    });
    it('should round down both x and y to the given number of decimal places', () => {
      const vector = new Vector2D(3.645, 4.983);
      expect(vector.round(1)).toStrictEqual(new Vector2D(3.6, 5.0));
    });
    it('should throw a TypeError when called with a non-number argument or not nil', () => {
      const vector = new Vector2D();
      expect(() => vector.round('foo')).toThrow(TypeError);
      expect(() => vector.round(NaN)).toThrow(TypeError);
      expect(() => vector.round({ x: 1, y: 2 })).toThrow(TypeError);
      expect(() => vector.round(null)).not.toThrow(TypeError);
    });
  });

  describe('min method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.min(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should modify the vector to have the minimum values', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(4, 1);
      const result = vector1.min(vector2);
      expect(result).toStrictEqual(new Vector2D(2, 1));
      expect(vector2).toStrictEqual(new Vector2D(4, 1));
    });
    it('should throw a TypeError if the argument is not a Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.max({})).toThrow(TypeError);
      expect(() => vector.max(null)).toThrow(TypeError);
      expect(() => vector.max(undefined)).toThrow(TypeError);
      expect(() => vector.max(123)).toThrow(TypeError);
      expect(() => vector.max('point')).toThrow(TypeError);
      expect(() => vector.max(true)).toThrow(TypeError);
    });
  });

  describe('max method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.max(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should modify the original vector to have the maximum values', () => {
      const vector1 = new Vector2D(2, 3);
      const vector2 = new Vector2D(4, 1);
      const result = vector1.max(vector2);
      expect(result).toStrictEqual(new Vector2D(4, 3));
      expect(vector2).toStrictEqual(new Vector2D(4, 1));
    });
    it('should throw a TypeError if the argument is not a Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.max({})).toThrow(TypeError);
      expect(() => vector.max(null)).toThrow(TypeError);
      expect(() => vector.max(undefined)).toThrow(TypeError);
      expect(() => vector.max(123)).toThrow(TypeError);
      expect(() => vector.max('point')).toThrow(TypeError);
      expect(() => vector.max(true)).toThrow(TypeError);
    });
  });

  describe('equals method', () => {
    it('returns true when comparing with itself', () => {
      const vector = new Vector2D(1, 2);
      expect(vector.equals(vector)).toBe(true);
    });
    it('returns true when comparing with an identical vector', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(1, 2);
      expect(vector1.equals(vector2)).toBe(true);
    });
    it('returns false when comparing with a vector with different x', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(3, 2);
      expect(vector1.equals(vector2)).toBe(false);
    });
    it('returns false when comparing with a vector with different y', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(1, 3);
      expect(vector1.equals(vector2)).toBe(false);
    });
    it('should throw a TypeError if the argument is not a Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.equals({})).toThrow(TypeError);
      expect(() => vector.equals(null)).toThrow(TypeError);
      expect(() => vector.equals(undefined)).toThrow(TypeError);
      expect(() => vector.equals(123)).toThrow(TypeError);
      expect(() => vector.equals('point')).toThrow(TypeError);
      expect(() => vector.equals(true)).toThrow(TypeError);
    });
  });

  describe('clear method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.clear();
      expect(result).toBe(vector);
    });
    it('should set x and y to zero', () => {
      const vector = new Vector2D(3, 4);
      expect(vector.clear()).toStrictEqual(new Vector2D(0, 0));
    });
  });

  describe('copy method', () => {
    it('should return the same Vector2D instance', () => {
      const vector = new Vector2D(8, 8);
      const result = vector.copy(new Vector2D(1, 1));
      expect(result).toBe(vector);
    });
    it('should set x and y to the same values as the given vector', () => {
      const vector1 = new Vector2D(1, 2);
      const vector2 = new Vector2D(3, 4);
      expect(vector1.copy(vector2)).toStrictEqual(new Vector2D(3, 4));
    });
    it('should throw a TypeError if the argument is not a Vector2D', () => {
      const vector = new Vector2D();
      expect(() => vector.equals({})).toThrow(TypeError);
      expect(() => vector.equals(null)).toThrow(TypeError);
      expect(() => vector.equals(undefined)).toThrow(TypeError);
      expect(() => vector.equals(123)).toThrow(TypeError);
      expect(() => vector.equals('point')).toThrow(TypeError);
      expect(() => vector.equals(true)).toThrow(TypeError);
    });
  });

  describe('clone method', () => {
    it('creates a new Vector2D object with the same x and y values', () => {
      const original = new Vector2D(3, 4);
      const cloned = original.clone();
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });
  });

  describe('toString method', () => {
    it('returns a string representation of the vector', () => {
      const vector = new Vector2D(1, 2);
      expect(vector.toString()).toBe('x: 1, y: 2');
    });
  });

  describe('toArray method', () => {
    it('returns an array representation of the vector', () => {
      const vector = new Vector2D(5, 6);
      expect(vector.toArray()).toEqual([5, 6]);
    });
  });

  describe('toObject method', () => {
    it('returns an object representation of the vector', () => {
      const vector = new Vector2D(7, 8);
      expect(vector.toObject()).toEqual({ x: 7, y: 8 });
    });
  });

  describe('toSize method', () => {
    it('returns an object with width and height properties equal to the vector x and y values', () => {
      const vector = new Vector2D(9, 10);
      expect(vector.toSize()).toEqual({ width: 9, height: 10 });
    });
  });
});