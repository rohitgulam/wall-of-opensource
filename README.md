# Wall of Open Source
This is just a fun project where developers can make their first open source contributions easily.  
This project is created with just HTML and CSS so that even beginners can make contributions easily.  

To participate/contribute, first do the following

## 1. Fork this repo 
## 2. Clone it on your local machine
```
git clone https://github.com/your-username/wall-of-opensource.git
```
## 3. Create a branch with your name
## 4. Make the code changes in `Index.html`


The only thing that you're required to do is add your own card that has your details. Like down below :point_down:

![1](https://user-images.githubusercontent.com/83160332/180177578-8bfa6b2e-424f-4496-8e94-44bf7c4f7237.jpeg)


The code is simple, just duplicate from where the comments say and then add your own details. as seen in the code below, copy the code and paste at the bottom position in the `Index.html` file above, add your name, details, and social links (twitter and github). On the image tag, make sure that you use and image link from other platforms (either twitter or github). **Do not upload an image or use an image from your local machine!**
```
              <!-- DUPLICATE THIS CODE BLOCK -->
                <!-- Person Card -->
                  <div class="card">
                      <div class="card-image">
                          link to your image
                      </div>
                      <div class="card-content">
                          <h3 class="card-content-name" id="my-name">your name</h3>
                          <p class="card-content-text" id="about-me">Who are you and what do you do?.</p>

                          <div class="card-icons">
                              <ul>
                                  <li><a href="https://twitter.com/YOUR TWITTER HANDLE" target="_blank"><i
                                              class="fa-brands fa-twitter"></i></a></li>
                                  <li><a href="https://github.com/GITHUB USERNAME" target="_blank"><i
                                              class="fa-brands fa-github"></i></a></li>
                                   <!-- you can add as many more lists with your social links as you desire -->
                              </ul>
                          </div>
                      </div>
                  </div>
                <!-- Person Card Ends Here -->
                <!-- DUPLICATE THIS CODE BLOCK ENDS HERE-->

```
After editing the `Index.html` file and making sure that everything is Cool, do the following

## Steps to follow to make a contribution  

5. Commit & Push the changes you made
```
git init 
git add --all
git commit -m "message"
git push
```
6. Create a pull request

### Refernces to help you 
[Make your first open-source contribution](https://tech.dineshs91.com/first-open-source-contribution)  
[Getting Started With Open-Source: How To Contribute As A Beginner](https://catalins.tech/getting-started-with-open-source-how-to-contribute-as-a-beginner) 
