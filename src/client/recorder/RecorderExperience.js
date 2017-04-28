import * as soundworks from 'soundworks/client';

const template = `
  <div class="foreground">
    <div class="section-top"></div>
    <div class="section-center flex-center">
      <p><%= msg %></p>
    </div>
    <div class="section-bottom"></div>
  </div>
`;

class RecorderExperience extends soundworks.Experience {
  constructor() {
    super();

    this.sharedRecorder = this.require('shared-recorder', { recorder: true });
    this.sharedParams = this.require('shared-params');
    this.sharedConfig = this.require('shared-config', { items: ['recordings'] });
  }

  start() {
    super.start();

    const recordingsConfig = this.sharedConfig.get('recordings');

    for (let name in recordingsConfig) {
      const { duration, period, num, cyclic } = recordingsConfig[name];
      console.log(name, duration, period, num, cyclic);
      this.sharedRecorder.createBuffer(name, duration, period, num, cyclic);
    }

    this.view = new soundworks.SegmentedView(template, { msg: 'wait' });
    this.show().then(() => {
      ['record-0', 'record-1', 'record-2', 'record-3'].forEach((value, index) => {
        this.sharedParams.addParamListener(value, (state) => {
          if (state === 'record')
            this.sharedRecorder.startRecord(value);
          else
            this.sharedRecorder.stopRecord(value);
        });
      });
    });
  }
}

export default RecorderExperience;
