import { Transform as _Transform } from 'stream';
var Transform = _Transform

class LlpParser extends Transform {
  constructor(header = 0x7E) {
    super();
    this.incommingData = Buffer.alloc(0);
    this.header = header;
  }
  
  _transform(chunk, encoding, cb) {
    this.incommingData = Buffer.concat([this.incommingData, chunk]);
    var index = this.incommingData.indexOf(this.header)
    if(index != -1 && this.incommingData.length >= 3) {
      var length = this.incommingData[index+1];
      var payload = this.incommingData.slice(index + 2, index + length + 2);
      var checksum = this.incommingData[index + length + 2]
      this.incommingData = this.incommingData.slice(index + length + 3)
      var local_checksum = (0xFF - payload.reduce((a, b) => parseInt(a) + parseInt(b), 0)) & 0xFF
      if (payload.length == length && local_checksum == checksum) {
        var keys = []
        this.push(payload);
      }     
    }
    cb();
  }
  
  _flush(cb){
    this.push(this.incommingData);
    this.incommingData = Buffer.alloc(0);
    cb();
  }
}
  
export default LlpParser;
