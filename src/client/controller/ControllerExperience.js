import * as soundworks from 'soundworks/client';

class ControllerExperience extends soundworks.ControllerExperience {
  constructor() {
    super();

    // buffers
    // this.setGuiOptions('simpleBuffer', { type: 'buttons' });
    // this.setGuiOptions('cyclicBuffer', { type: 'buttons' });
    this.setGuiOptions('state', { type: 'buttons' });

    this.setGuiOptions('record-0', { type: 'buttons' });
    this.setGuiOptions('record-0-gain', { type: 'slider', size: 'large' });
    this.setGuiOptions('record-1', { type: 'buttons' });
    this.setGuiOptions('record-1-gain', { type: 'slider', size: 'large' });
    this.setGuiOptions('record-2', { type: 'buttons' });
    this.setGuiOptions('record-2-gain', { type: 'slider', size: 'large' });
    this.setGuiOptions('record-3', { type: 'buttons' });
    this.setGuiOptions('record-3-gain', { type: 'slider', size: 'large' });

    // granular options
    this.setGuiOptions('periodAbs', { type: 'slider', size: 'large' });
    this.setGuiOptions('durationAbs', { type: 'slider', size: 'large' });
    this.setGuiOptions('positionVar', { type: 'slider', size: 'large' });
    this.setGuiOptions('resamplingVar', { type: 'slider', size: 'large' });
    // levels
    this.setGuiOptions('outputGain', { type: 'slider', size: 'large' });
  }

  start() {
    super.start();

    this.receive('stop', (name) => this.sharedParams.update(name, 'stop', false));
  }
}

export default ControllerExperience;
