import React from 'react'
import Layout from './layout/Layout'

const PrivacyAndPolicy = () => {
  return (
    <>
    <Layout>
      <div className="PrivacyAndPolicy font-sans max-w-3xl mx-auto space-y-9 mt-14">
        <div className='space-y-24 '>
          <div className='text-center'>
            <h2 className='text-4xl font-bold'>Privacy policy</h2>
            <p className='mt-4'>Last Updated: 29/11/2023</p>
          </div>
          <p>Thank you for choosing Vehicify! This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information when you use our mobile application.</p>
        </div>
      
        <div>
          <h4 className='text-xl font-semibold'>1. Information We Collect</h4>
          <div className='space-y-3 mt-5 text-[15px]'>
            <p><span className='font-medium'>1.1</span> User-Provided Information: When you use Vehicify, we may collect information you provide, such as your name, email address, phone number, and other relevant details.</p>
            <p><span className='font-medium'>1.2</span> Location Information: Vehicify uses location services to provide features related to vehicle management. We collect and store your device's location data when you use the app.</p>
            <p><span className='font-medium'>1.3</span> Vehicle Information: To enable effective vehicle management, Vehicify may collect and store information about your vehicles, including make, model, year, and registration details.</p>
            <p><span className='font-medium'>1.4</span> Phone Numbers: We also collect phone numbers for communication and authentication purposes.</p>
            <p><span className='font-medium'>1.5</span> Usage and Analytics Data: We collect information about how you use Vehicify, such as app usage statistics, features accessed, and any errors encountered. This data helps us enhance the app's functionality and user experience.</p>
          </div>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>2. How We Use Your Information</h4>
          <div className='space-y-3 mt-5 text-[15px]'>
            <p><span className='font-medium'>2.1</span> Vehicle Management: Your provided and collected information is used to facilitate the management of your vehicles through Vehicify, including location-based services.</p>
            <p><span className='font-medium'>2.2</span> Communication: We may use your contact information, including phone numbers, to send you important updates, notifications, and relevant information about Vehicify.</p>
            <p><span className='font-medium'>2.3</span> Improvement of Services: The data collected helps us analyze usage patterns, identify areas for improvement, and enhance the overall functionality and performance of Vehicify.</p>
          </div>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>3. Data Security</h4>
          <p className='text-[15px] mt-2'>We take the security of your information seriously. Vehicify employs industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>4. Data Sharing</h4>
          <p className='text-[15px] mt-2'>We do not sell, trade, or otherwise transfer your information to outside parties. Your information may be shared with third-party service providers that assist us in operating the app, conducting our business, or servicing you.</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>5. Consent and Control</h4>
          <p className='text-[15px] mt-2'>By using Vehicify, you consent to the terms outlined in this Privacy Policy. You have the right to review, update, or delete your personal information. You can adjust your device settings to control the app's access to location services.</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>6. Changes to this Privacy Policy</h4>
          <p className='text-[15px] mt-2'>We reserve the right to update our Privacy Policy as needed. Any changes will be reflected on this page, and we encourage you to check for updates regularly.</p>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>Contact Us</h4>
          <p className='text-[15px] mt-2'>If you have any questions or concerns regarding this Privacy Policy, please contact us at.</p>
          <a className='text-blue-600' href="mailto:support@brickly.ai">support@brickly.ai</a>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default PrivacyAndPolicy