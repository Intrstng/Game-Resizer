export const DescriptionComponent = {
  id: 'description',
  title: 'Description',
  render: (className = 'container') => {
    return `
      <section class="${className} description">
        <h2 class="description__title">Tutorial:</h2>
          <div class="description__content">
            <p>Jump on platforms avoiding spikes and circular saws as you gradually move towards the finish line.</p>
            <p><span>Platforms One / Two / Three</span> can be active or inactive (switch their state with the <span>Space</span> key).</p>
            <p>The <span>Jump-Toggle-Switch</span> platform also changes its state every time the character jumps. Being on platforms <span>One / Two / Three</span>, be careful, you need to catch the right moment of switching during the jump.</p>
            <p><span>One-Step platform</span> - allows only a single presence of a character. After leaving this platform by the character or his collision with it, it is destroyed.<p/>
            <p>When encountering <span>dragons</span>, be careful, their fireballs are deadly.</p>
            <p>You can also encounter <span>Signal-Suppressor-Zones</span> in which the character cannot control the switching of states of <span>One / Two / Three</span> platforms.<p/>
            <p>Are you ready to take on the challenge?</p>
          </div>
      </section>
    `;
  }
};