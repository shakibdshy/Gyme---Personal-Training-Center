import React from "react";

const Blog = () => {
  return (
    <section className='blog-area py-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 mt-5'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>
                  1. Difference between <code>Authorization</code> and{" "}
                  <code>Authentication</code>
                </h3>
                <p className='card-text'>
                  Authentication is the first step in any security Process.
                  Authorization is the process of verifying the identity of a
                  user.
                </p>
                <table className='table table-responsive'>
                  <thead>
                    <tr>
                      <th>
                        <strong>Authentication</strong>
                      </th>
                      <th>
                        <strong>Authorization</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Determines whether users are who they claim to be</td>
                      <td>Determines what users can and cannot access</td>
                    </tr>
                    <tr>
                      <td>
                        Challenges the user to validate credentials (for
                        example, through passwords, answers to security
                        questions, or facial recognition)
                      </td>
                      <td>
                        Verifies whether access is allowed through policies and
                        rules
                      </td>
                    </tr>
                    <tr>
                      <td>Usually done before authorization</td>
                      <td>Usually done after successful authentication</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='col-md-8 mt-5'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>
                  2. Why are you using firebase? What other options do you have
                  to implement authentication?
                </h3>
                <p className='card-text'>
                  Google Firebase offers to many features, it is one of the best
                  backend development tool for web and mobile apps. It decrease
                  development workload and time. And it's a complete prototyping
                  tool. It is simple, shallow, friendly, and commercially
                  recognized. <br /> We can use another platfrom alternetives of
                  firebase for authentication. there are top 10 alternetives of
                  firebase.
                </p>
                <ol>
                  <li>Back4App</li>
                  <li>Parse</li>
                  <li>AWS Amplify</li>
                  <li>Backendless</li>
                  <li>Kuxxle</li>
                  <li>Supabase</li>
                  <li>appwrite</li>
                  <li>Hasura</li>
                  <li>Nhost</li>
                  <li>Deployd</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='col-md-8 mt-5'>
            <div className='card'>
              <div className='card-body'>
                <h3 className='card-title'>
                  3. What other services does <code>firebase</code> provide
                  other than authentication
                </h3>
                <p className='card-text'>
                  There are many services which are provides Firebase without
                  authentication, Most useful of them are: Cloud Firestore.
                  Cloud Functions. Authentication. Hosting. Cloud Storage.
                  Google Analytics. Predictions. Cloud Messaging.
                </p>
                <ul>
                  <li>Realtime Database </li>
                  <li>Remote Config </li>
                  <li>Firebase Ml </li>
                  <li>Cloud Functions </li>
                  <li>Cloud Messaging </li>
                  <li>Cloud Storage </li>
                  <li>Hosting </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
