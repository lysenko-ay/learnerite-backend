__test__('n', 4, 'm', 4, 'k', 2, @__master__, @__user__)
__test__('n', 1, 'm', 8, 'k', 2, @__master__, @__user__)
__test__('n', 7, 'm', 8, 'k', 4, @__master__, @__user__)

function [result] = __master__(n, m, k)
    r = floor(n / k);
    c = floor(m / k);
    result = r * c;
endfunction

function [result] = __user__()
  %{usercode}%

  if exist('result') == 0
    result = 'undefined';
  endif
endfunction
