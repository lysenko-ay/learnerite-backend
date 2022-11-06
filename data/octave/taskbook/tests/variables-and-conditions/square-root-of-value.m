__test__('k', randi([0, 100], 1, 1), @__master__, @__user__)
__test__('k', randi([-100, -1], 1, 1), @__master__, @__user__)

function [result] = __master__(k)
  if k >= 0
    result = sqrt(k);
  else
    result = "invalid value";
  endif
end

function [result] = __user__()
  %{usercode}%

  if exist('result') == 0
    result = 'undefined';
  endif
end
