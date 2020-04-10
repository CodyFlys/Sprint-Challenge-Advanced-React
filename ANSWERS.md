- [ ] Why would you use class component over function components (removing hooks from the question)?
a class component should be able to use the react lifecycle methods and should also gain the ability to use the this keyword

- [ ] Name three lifecycle methods and their purposes.
componentDidMount - we can use this to load data after the component mounts to ensure things don't run before other things do.

render - which renders the component/code and happens when mounting or updating the component, etc. it renders to the ui

getSnapshopBeforeUpdate - this invokes before the DOM is updated. the value that it returns gets passed to componentdidupdate()

- [ ] What is the purpose of a custom hook?
hooks purpose is reusable code that can be called basically anywhere within our app and create functions from components.

- [ ] Why is it important to test our apps?

We test our app to ensure nothing is breaking and to ensure the product is ready to ship. Testing saves time and money from having to do manual testing so this is important to do on larger-scale apps.