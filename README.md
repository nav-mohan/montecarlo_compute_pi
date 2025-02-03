## Estimation of π using Monte-Carlo Simulation

A web visualization to demonstrate the estimation of π using a Monte Carlo simulation. By repeatedly sampling for points within a square that bounds a circle we get an asymptotically accurate approximation for π.  

### Algorithm  
```
n_circle = 0                             # initialize number of points within circle
n_square = 0                             # initialize number of points within square
n_steps = 0                              # initialize number of simulation steps

while(n_steps <= NO_OF_ITERATIONS)
{
   point = [rand(-r,r),rand(-r,r)];      # generate random point within square
   dist = point[0]^2 + point[1]^2;       # compute distance of point from center of circle
   if(dist < r)
      n_circle+=1;                       # if point falls within circle, increment n_circle
   n_square += 1;                        # increment number of points in square
   n_steps += 1;                         # increment number of iterations done
}
pi_estimate = 4 * n_circle/n_square;
pi_error = 100 * (pi_estimate - Math.PI)/(Math.PI)
```

<video src="montecarlo.webm" autoplay="true" loop="true"></video>
