1.What is HTTPS? How is it different from HTTP?

HTTP is a protocol used to transfer data between browser and server, but the data is sent in plain text. That means anyone on the network can read or change it.
HTTPS is the secure version of HTTP. It encrypts the data before sending it, so even if someone intercepts it, they cannot understand it. HTTPS uses SSL/TLS for security and is used by all real production websites.

2.Explain SSL/TLS. What is the SSL handshake?

SSL/TLS is a security protocol that creates a secure connection between client and server. TLS is the newer and safer version of SSL.

SSL handshake is the process where browser and server agree on how to communicate securely. First, the browser asks the server for a secure connection. The server sends its SSL certificate. The browser verifies the certificate. Then both sides generate encryption keys, and after that all data is transferred in encrypted form.

3.What is encryption? Symmetric vs asymmetric encryption?

Encryption means converting normal readable data into unreadable form to protect it.

Symmetric encryption uses the same key for both encryption and decryption. It is fast and used for transferring large amounts of data.

Asymmetric encryption uses two keys: public key and private key. Public key encrypts the data and private key decrypts it. It is slower but more secure.

In HTTPS, asymmetric encryption is used to exchange keys, and symmetric encryption is used for actual data transfer.

4.What are certificates? What is a Certificate Authority?

A certificate proves that a website is genuine and not fake. It contains the website identity and public key.

A Certificate Authority (CA) is a trusted organization that issues certificates. Browsers trust websites only if the certificate is issued by a trusted CA like Let’s Encrypt or DigiCert.

5.Difference between authentication and authorization?

Authentication is about verifying who the user is. For example, logging in with username and password.

Authorization is about what the user is allowed to do after login. For example, whether a user can access admin pages or not.

Authentication always comes before authorization.

6.Explain session-based authentication. How do sessions work?

In session-based authentication, when a user logs in, the server creates a session and stores it in memory or database. The session ID is sent to the browser as a cookie. On every request, the browser sends this cookie back to the server. The server checks the session ID and allows or denies access.

This approach is commonly used in traditional web applications.

7.What are cookies? Security attributes of cookies?

Cookies are small pieces of data stored in the browser and sent with every request to the server.

HttpOnly means the cookie cannot be accessed using JavaScript, which helps prevent XSS attacks.
Secure means the cookie is sent only over HTTPS.
SameSite controls whether cookies are sent with cross-site requests and helps prevent CSRF attacks.

8.What is token-based authentication? How is it different from session-based?

In token-based authentication, the server generates a token (usually JWT) after login. The token is stored on the client and sent with every request. The server validates the token instead of storing session data.

Session-based authentication stores session data on the server, while token-based authentication is stateless and easier to scale. That’s why token-based authentication is mostly used in modern APIs and microservices.