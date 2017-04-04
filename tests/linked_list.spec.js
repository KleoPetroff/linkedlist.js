import mocha from 'mocha';
import {expect} from 'chai';

import LinkedList from '../src/index';

describe('Linked List', function() {
  let instance;

  beforeEach(function() {
     instance = new LinkedList();
  })

  it('it should export a class', () => {
    expect(LinkedList).to.be.exist;
  });

  it('should be able to create new instance', () => {
    expect(instance).to.be.instanceof(LinkedList);
  });

  it('should have a size of 0', () => {
    expect(instance.size).to.equal(0);
  });

  it('should have a public insert method', () => {
    expect(instance.insert).to.exist;
  });

  it('insert should create a new node', () => {
    instance.insert(1);
    expect(instance.head).to.deep.equal({data: 1, next: null});
  });

  it('head should always be the first element in the list', () => {
    instance.insert(1);
    instance.insert(2);
    expect(instance.head).to.deep.equal({data: 2, next: { data: 1, next: null }});
  })

  it('next should link to the next node', () => {
    instance.insert(2);
    instance.insert(3);
    expect(instance.head.next).to.deep.equal({data: 2, next: null});
  });

  it('should progressively increment the size', () => {
    instance.insert(2);
    instance.insert(3);
    expect(instance.size).to.equal(2);
  });

  it('should have remove method', () => {
    expect(instance.remove).to.exist;
  });

  it('should throw if the linked list is empty', () => {
    expect(() => instance.remove()).to.throw('Cannot remove from empty linked list.');
  });

  it('should remove the last element of the list', () => {
    instance.insert(1);
    instance.insert(2);
    instance.remove();

    expect(instance.head).to.deep.equal({data: 2, next: null});
  });

  it('should remove the only element in a one-element list', () => {
    instance.insert(2);
    instance.remove();

    expect(instance.head).to.be.null;
  });

  it('should have a removeFirst method', () => {
    expect(instance.removeFirst).to.exist;
  });

  it('should throw if the list is empty', () => {
    expect(() => instance.removeFirst()).to.throw;
  });

  it('should remove the single element in the list', () => {
    instance.insert(2);
    instance.removeFirst();

    expect(instance.head).to.be.null;
  });

  it('should remove the first element in the list', () => {
    instance.insert(2);
    instance.insert(1);
    instance.removeFirst();

    expect(instance.head).to.deep.equal({ data: 2, next: null });
  });

  it('should decrease the size on removeFirst', () => {
    instance.insert(2);
    instance.insert(1);
    instance.removeFirst();

    expect(instance.size).to.equal(1);
  });
});