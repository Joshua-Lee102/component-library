import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/Button'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Cards'
import Icon from './components/Icon'
import Testimonial from './components/Testimonials'

function App() {
  return (
    <>
      <h1 className="header">Badges: Square</h1>
        <div className= "badge-container">
          <Badge color="gray" shape="square"/>
          <Badge color="red" shape="square"/>
          <Badge color="yellow" shape="square"/>
          <Badge color="green" shape="square"/>
          <Badge color="blue" shape="square"/>
          <Badge color="indigo" shape="square"/>
          <Badge color="purple" shape="square"/>
          <Badge color="pink" shape="square"/>
        </div>
      <h1 className="header">Badges: Pill</h1>
        <div className= "badge-container">
          <Badge color="gray" shape="pill"/>
          <Badge color="red" shape="pill"/>
          <Badge color="yellow" shape="pill"/>
          <Badge color="green" shape="pill"/>
          <Badge color="blue" shape="pill"/>
          <Badge color="indigo" shape="pill"/>
          <Badge color="purple" shape="pill"/>
          <Badge color="pink" shape="pill"/>
        </div>
      <h1 className="header"> Banners </h1>
        <div>
          <Banner 
            type="success" 
            title="Congratulations!" 
            message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid partitur, ipsum similique veniam."
          />
          <Banner 
            type="warning" 
            title="Attention" 
            message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid partitur, ipsum similique veniam."
          />
          <Banner 
            type="error" 
            title="There is a problem with your application!" 
            message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid partitur, ipsum similique veniam."
          />
          <Banner 
            type="neutral" 
            title="Update Available" 
            message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquid partitur, ipsum similique veniam."
          />
        </div>
      <h1 className="header"> Cards </h1>
        <div className="cards-container">
          <Card icon={<Icon.HiOutlineCloudUpload/>} iconBackgroundColor="blue">
            <h2 className="card-title">Easy development</h2>
              <div className="card-description">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </div>
          </Card>
          
          <Card icon={<Icon.FiActivity/>} iconBackgroundColor="black">
            <h2 className="card-title">Easy development</h2>
              <div className="card-description">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </div>
          </Card>
          
          <Card icon={<Icon.FiGitlab/>} iconBackgroundColor="red">
            <h2 className="card-title">Easy development</h2>
              <div className="card-description">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </div>
          </Card>
          
          <Card icon={<Icon.FiNavigation2/>} iconBackgroundColor="green">
            <h2 className="card-title">Easy development</h2>
              <div className="card-description">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </div>
          </Card>
      </div>
      
      <h1 className="header">Testimonials</h1>
        <Testimonial
          hasImage={true}
          imageUrl="path-to-your-image.jpg"
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          author="Jane Doe"
          title="CEO, Company"
        />
        <Testimonial
          hasImage={false}
          header="Workcation"
          quote="Nemo expedita voluptas culpa sapiente alias molestiae..."
          author="John Doe"
          title="CTO, Another Company"
        />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
