export const HomeComponent = {
  id: 'main',
  title: 'Greeting',
  render: (className = 'content__text') => {
    return `
    <section class="${className} greeting">
      <h2 class="greeting__text">
      Welcome to the wonderful world of Platform world! The young adventurer Virtual Boy sets off on a journey, help him overcome all the dangers and obstacles on his way...</p>
    </section>`
  }
};