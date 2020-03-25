% This function represents the dynamic equations 
%
% This is the DERIVATIVE SECTION of the simulation.
%
% The current time, state and input values are passed to the function as arguments
% and the function returns the state derivative.
function xdot = state_space_model(x,Vin);

global  R Ke L Kt bs Jm Jw KY Rm KN KV KS VT Rw  	 % global parameter transferred from main program

FL = ((2*Kt)*(1/Rw))*x(1);                           % Left wheel force 
FR = ((2*Kt)*(1/Rw))*x(4);                           % Right wheel force
xdot(1,1) = (Vin(2)-R*x(1)-Ke*x(2))/L;               % Left side electrical
xdot(2,1) = (Kt*x(1)-bs*(x(2)-x(3)))*(1/Jm);         % Left side motor
xdot(3,1) = (bs*(x(2)-x(3)))/Jw;                     % Left side wheel
xdot(4,1) = (Vin(1)-R*x(4)-Ke*x(5))/L;               % Right side electrical
xdot(5,1) = (Kt*x(4)-bs*(x(5)-x(6)))*(1/Jm);         % Right side motor
xdot(6,1) = (bs*(x(5)-x(6)))/Jw;                     % Right side wheel
xdot(7,1) = (((KY*(FL-FR))*Rm)-(KN*x(7)));           % Yaw
xdot(8,1) = KV*(FL+FR)*((x(8))/VT)-KS*x(8)+VT*x(7);  % Sway
xdot(9,1) = x(7);                                    % Yaw angle



