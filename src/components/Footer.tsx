
const Footer = () => {
  return (
    <footer className='footer font-oswald bottom-0 right-0 left-0 mt-4'>
        <section className='text-center '>
            <p>© 2023 DrinkQuest®</p>
        </section>
        <section className="social-link flex justify-center items-center">
          <a className="flex items-center" href='https://github.com/aaron25484' target='_blank'>Aaron de los Santos</a>
          <img className="github size-4 ml-3" src="src/assets/img/github.png" alt="github logo" ></img>   
        </section>
    </footer>
)
}

export default Footer