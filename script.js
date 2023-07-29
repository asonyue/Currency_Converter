$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var from = $('#from').val();
		var to = $('#to').val();
		var amount = $('#amount').val();
		$.ajax({
			url: 'https://api.api-ninjas.com/v1/exchangerate',
			type: 'GET',
			dataType: 'json',
			headers: {
				'X-Api-Key': '/R6BuMDDqWcMWb5mN6JhNw==r8fEWsKkqy2O92I6'
			},
			data: {
				pair: from + '_' + to
			},
			success: function(data) {
				var rate = data['exchange_rate'];
				var result = parseFloat(amount) * rate;
				$('#result').html(amount + ' ' + from + ' = ' + result.toFixed(2) + ' ' + to);
			},
			error: function() {
				$('#result').html('Error: API request failed');
			}
		});
	});
});