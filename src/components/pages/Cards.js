// use "rfce" to import 
import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
			<div className='cards'>
				<h1>Job / Project Experience</h1>
        <h3>Research and Software Development</h3>
				<div className='cards__container'>
					<div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              icon='github'
              utubelink = "https://www.youtube.com/embed/f2zKddqyqEA?modestbranding=1&autohide=1&showinfo=0"
              text='Implementation of Multiple Person Pose Estimation with C++ / Libtorch'
              description="Software for human key points prediction and detection using C++ Pytorch (Libtorch) 
                            and a Resnet-backbone model for a Drown Detection System."
              label='C++ / Pytorch'
              path='https://github.com/winggo12/Libtorch-Multi-Person-Pose-Estimation'
            />
            <CardItem
              icon='github'
              utubelink= "https://www.youtube.com/embed/O55QJmupgOU?modestbranding=1&autohide=1&showinfo=0"
              text='Single Pose Estimation on IOS Device with Swift / Tf-Lite'
              description='IOS framework for 2D Human Pose Estimation using TensorFlow Mobile and a Mobilenetv2-backbone model'
              label='Swift / Tensorflow'
              path='https://github.com/winggo12/Swift-Tf-Lite-MobilePoseEstimation'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              icon='researchgate'
              utubelink= 'https://www.youtube.com/embed/Uz-JzAJHIyc?modestbranding=1&autohide=1&showinfo=0'
              text='Human Activity Recognition with LSTM and Pose Estimation'
              description='Classifiy different sport postures with LSTM and 2D Pose Estimation with 30-timesteps using Keras'
              label='Python / Keras'
              path='https://dl.acm.org/doi/abs/10.1145/3297097.3297115'
            />
            <CardItem
              icon='github'
              src='images/aicourse.png'
              text='AI Introduction Courses of Keras/Python'
              description='Developed teaching materials for Artificial Intelligence courses for high school student with Python and Kera'
              label='Python / Keras'
              path='https://github.com/winggo12/HKU_ELRN1902_Basic-in-AI-for-Keras'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>

          <h1>School and Personal Experience</h1>
          <h3>Machine Learning </h3>
          <h3 style={{ visibility: 'hidden' }}> _ </h3>
          <ul className='cards__items'>
                <CardItem
                  icon='github'
                  utubelink = "https://www.youtube.com/embed/5bUcy2ziMYc?modestbranding=1&autohide=1&showinfo=0"
                  text='Adversarial Latent Autoencoders with Pytorch'
                  description="Using ALAE to reconstruct images in 28x28 resolution and compare the result with the corresponding paper with evaluation metrics like FID and PPL"
                  label='Python / Pytorch'
                  path='https://github.com/winggo12/Pytorch-ALAE'
                />
                <CardItem
                  icon='github'
                  src='images/federatedlearning.png'
                  text='Federated Learning with Pytorch'
                  description='Compare Centralized Training and Federated Learning with Non-IID data '
                  label='Python / Pytorch'
                  path='https://github.com/winggo12/Pytorch-FederatedLearning'
                />
            </ul>

					</div>
				</div>
			</div>


    )
}

export default Cards
