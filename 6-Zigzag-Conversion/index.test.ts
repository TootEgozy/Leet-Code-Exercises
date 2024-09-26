import { expect } from "chai";
import { convert } from "./index";


describe('6: Zigzag Conversion', () => {
  it('should convert a zigzag of empty string', () => {
    const res = convert('', 2);
    expect(res).to.eqls('');
  });

  it('should convert a zigzag of 2', () => {
    const res = convert('abcdef', 2);
    expect(res).to.eqls('acebdf');
  });

  it('should convert a zigzag of 3', () => {
    const res = convert('abcdefghijklmnop', 3);
    expect(res).to.eqls('aeimbdfhjlnpcgko');
  });

  it('should convert a zigzag of 10', () => {
    const res = convert('abcdefghijklmnopqrstuvwxyz', 10);
    expect(res).to.eqls('asbrtcqudpveowfnxgmyhlzikj');
  });

  it('should convert a zigzag of 0', () => {
    const res = convert('abcd', 0);
    expect(res).to.eqls('abcd');
  });

});