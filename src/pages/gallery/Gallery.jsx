import Header from '../..//components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []


  for(let i = 0; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery