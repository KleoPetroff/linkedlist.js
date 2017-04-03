import mocha from 'mocha';
import {expect} from 'chai';

import LinkedList from '../src/index';

describe('Linked List', function() {
  it('it should export a class', () => {
    expect(LinkedList).to.be.exist;
  });

  it('should be able to create new instance', () => {
    const instance = new LinkedList();
    expect(instance).to.be.instanceof(LinkedList);
  });

  it('should have a size of 0', () => {
    const instance = new LinkedList();
    expect(instance.size).to.equal(0);
  });

  it('should have a public push method', () => {
    const instance = new LinkedList();
    expect(instance.push).to.exist;
  });

  it('push should create a new node', () => {
    const instance = new LinkedList();
    instance.push(1);
    expect(instance.head).to.deep.equal({data: 1, next: null});
  });

  it('next should link to the next node', () => {
    const instance = new LinkedList();
    instance.push(2);
    instance.push(3);
    expect(instance.head.next).to.deep.equal({data: 2, next: null});
  });

  it('should progressively increment the size', () => {
    const instance = new LinkedList();
    instance.push(2);
    instance.push(3);
    expect(instance.size).to.equal(2);
  });

  it('should have remove method', () => {
    const instance = new LinkedList();
    expect(instance.remove).to.exist;
  });

  it('should throw if the linked list is empty', () => {
    const instance = new LinkedList();

    expect(() => instance.remove(1)).to.throw('Cannot remove from empty linked list.');
  });

  it('should remove the last element of the list', () => {
    const instance = new LinkedList();
    instance.push(1);
    instance.push(2);
    instance.remove();

    expect(instance.head).to.deep.equal({data: 2, next: null});
  });

  it('should remove the only element in a one-element list', () => {
    const instance = new LinkedList();
    instance.push(2);
    instance.remove();

    expect(instance.head).to.be.null;
  });
});