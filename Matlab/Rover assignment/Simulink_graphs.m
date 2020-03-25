figure(3)										% define figure window number
subplot(5,2,1)                                  % select the first subplot
plot(tout,x1,'b-')                              % plot state 1 against time
xlabel('time [s]')                              % label x-axis
ylabel('Left current [A]')                      % label y-axis
grid on                                         % turn grid on 
                                            
subplot(5,2,2)                                  % select the second subplot
plot(tout,x4,'b-')                              % plot state 2 against time
xlabel('time [s]')                              % label x-axis
ylabel('Right current [A]')                     % label y-axis
grid on                                         % turn grid on 
                                       
subplot(5,2,3)                                  % select the third subplot
plot(tout,x2,'b-')                              % plot state 3 against time
xlabel('time [s]')                              % label x-axis
ylabel('Left motor rot [rad/s]')                % label y-axis
grid on                                         % turn grid on 

subplot(5,2,4)                                  % select the forth subplot
plot(tout,x5,'b-')                              % plot state 4 against time
xlabel('time [s]')                              % label x-axis
ylabel('Right motor rot [rad/s]')               % label y-axis
grid on                                         % turn grid on 

subplot(5,2,5)                                  % select the fifth subplot
plot(tout,x3,'b-')                              % plot state 5 against time
xlabel('time [s]')                              % label x-axis
ylabel('Left wheel rot [rad/s]')                % label y-axis
grid on                                         % turn grid on 

subplot(5,2,6)                                  % select the sixth subplot
plot(tout,x6,'b-')                              % plot state 6 against time
xlabel('time [s]')                              % label x-axis
ylabel('Right wheel rot [rad/s]')               % label y-axis
grid on                                         % turn grid on 

subplot(5,2,8)                                  % select the eighth subplot
plot(tout,x8,'b-')                              % plot state 8 against time
xlabel('time [s]')                              % label x-axis
ylabel('Sway velocity [m/s]')                   % label y-axis
grid on                                         % turn grid on 

subplot(5,2,7)                                  % select the seventh subplot
plot(tout,x7,'b-')                              % plot state 7 against time
xlabel('time [s]')                              % label x-axis
ylabel('Yaw rate [rad/s]')                      % label y-axis
grid on                                         % turn grid on 

subplot(5,2,9)                                  % select the nineth subplot
plot(tout,x9,'b-')                              % plot state 9 against time
xlabel('time [s]')                              % label x-axis
ylabel('Yaw angle [degrees]')                   % label y-axis
grid on                                         % turn grid on 
