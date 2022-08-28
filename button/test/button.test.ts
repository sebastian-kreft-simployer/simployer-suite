import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type SimployerSuiteUIButton from '../src/button';

describe('<ss-ui-button>', () => {
  let element: SimployerSuiteUIButton;

  describe('when default', () => {
    before(async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button>Button label</ss-ui-button>`
      );
    });

    it('should pass accessibility checks', async () => {
      await expect(element).to.be.accessible();
    });

    it('should have correct default properties', () => {
      expect(element.buttonId).to.equal('button');
      expect(element.color).to.equal('primary');
      expect(element.loading).to.equal(false);
      expect(element.disabled).to.equal(false);
      expect(element.type).to.equal('button');
    });

    it('should render as a <button>', () => {
      const innerButton = element.shadowRoot!.querySelector('button');
      expect(innerButton).to.exist;
    });
  });

  describe('when disabled', () => {
    before(async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button disabled>Disabled button</ss-ui-button>`
      );
    });

    it('should pass accessibility checks', async () => {
      await expect(element).to.be.accessible();
    });
    it('should be disabled', () => {
      expect(element.disabled).to.equal(true);
      console.log(element);
    });

    it('should not bubble up clicks', () => {
      const handleClick = sinon.spy();
      element.addEventListener('click', handleClick);

      element.click();
      expect(handleClick).not.to.have.been.called;

      element.shadowRoot!.querySelector('button')!.click();
      expect(handleClick).not.to.have.been.called;
    });
  });

  describe('when loading', () => {
    before(async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button loading>Loading button</ss-ui-button>`
      );
    });

    it('should pass accessibility checks', async () => {
      await expect(element).to.be.accessible();
    });
    it('should be disabled', () => {
      expect(element.shadowRoot!.querySelector('button[disabled]')).to.exist;
    });
    it('should have loading spinner', () => {
      const spinner = element.shadowRoot!.querySelector('ss-ui-spinner');
      expect(spinner).to.exist;
    });
  });

  describe('when disabled and loading', () => {
    before(async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button disabled loading
          >Disabled and loading button</ss-ui-button
        >`
      );
    });

    it('should pass accessibility checks', async () => {
      await expect(element).to.be.accessible();
    });
    it('should be disabled', () => {
      expect(element.disabled).to.equal(true);
      expect(element.shadowRoot!.querySelector('button[disabled]')).to.exist;
    });
    it('should have loading spinner', () => {
      const spinner = element.shadowRoot!.querySelector('ss-ui-spinner');
      expect(spinner).to.exist;
    });
  });

  describe('functionality', () => {
    before(async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button>Button label</ss-ui-button>`
      );
    });
    it('should handle clicks when clicking the button', () => {
      const handleClick = sinon.spy();
      element.addEventListener('click', handleClick);
      element.shadowRoot!.querySelector('button')!.click();
      expect(handleClick).to.have.been.calledOnce;
    });

    it('should handle clicks when using the click() method', () => {
      const handleClick = sinon.spy();
      element.addEventListener('click', handleClick);
      element.click();
      expect(handleClick).to.have.been.calledOnce;
    });

    it('should have focus when using the focus() method', () => {
      element.focus();
      expect(element.hasFocus).to.equal(true);
    });
  });

  describe('slots', () => {
    it('renders prefix slot', async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button
          ><div class="prefix" slot="prefix">prefix</div>
          Button label</ss-ui-button
        >`
      );
      const slot =
        element.shadowRoot!.querySelector<HTMLSlotElement>(
          'slot[name=prefix]'
        )!;
      const prefixSlot = slot
        ?.assignedElements()
        .filter((node) => node.matches('.prefix'))[0];
      expect(prefixSlot).to.exist;
    });
    it('renders suffix slot', async () => {
      element = await fixture<SimployerSuiteUIButton>(
        html`<ss-ui-button
          ><div class="suffix" slot="suffix">suffix</div>
          Button label</ss-ui-button
        >`
      );
      const slot =
        element.shadowRoot!.querySelector<HTMLSlotElement>(
          'slot[name=suffix]'
        )!;
      const suffixSlot = slot
        ?.assignedElements()
        .filter((node) => node.matches('.suffix'))[0];
      expect(suffixSlot).to.exist;
    });
  });
});

function before(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}
