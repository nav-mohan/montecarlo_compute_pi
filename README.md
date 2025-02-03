## Estimation of π using Monte-Carlo Simulation

A web visualization to demonstrate the estimation of π using a Monte Carlo simulation. By repeatedly sampling for points within a square that bounds a circle we get an asymptotically accurate approximation for π.  

### Algorithm  
1. Initialize 
    * `n_circle = 0`  _number of points within circle_
    * `n_square = 0`  _number of points within square_
    * and `n_steps = 0` _simulation steps_
2. Generate a random coordinates `(x,y)`.
3. Calculate ` d = x*x + y*y`.
4. If `d <= 1`, increment `n_circle += 1`.
5. Increment `n_square += 1` and `n_steps +=1`
6. while `n_steps` < `NO_OF_ITERATIONS`, repeat from __step 2__.
7. Calculate `π = 4 * (n_circle / n_square)`.

<video src="montecarlo.webm" autoplay="true" loop="true"></video>