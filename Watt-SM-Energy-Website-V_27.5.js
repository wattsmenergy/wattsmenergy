(function () {
      const form = document.getElementById('amcForm');
      const status = document.getElementById('formStatus');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete all required fields.'; return; }
        const value = id => document.getElementById(id).value.trim();
        const capacity = value('capacity');
        const body = [
          'Solar AMC Request', '',
          'Customer Name: ' + value('customerName'),
          'Phone: ' + value('phone'),
          'Email: ' + value('email'),
          'Site Location: ' + value('location'),
          'Customer Type: ' + value('customerType'),
          'Solar Capacity: ' + (capacity ? capacity + ' kW' : 'Not provided'),
          'System Type: ' + value('systemType'),
          'Service Required: ' + value('serviceType'),
          'Additional Details: ' + (value('message') || 'None')
        ].join('\n');
        status.textContent = 'Opening your email application...';
        window.location.href = 'mailto:info@wattsmenergy.com?subject=' + encodeURIComponent('Solar AMC Request - ' + value('customerName')) + '&body=' + encodeURIComponent(body);
      });
      document.getElementById('whatsappRequest').addEventListener('click', function () {
        if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete all required fields.'; return; }
        const value = id => document.getElementById(id).value.trim();
        const capacity = value('capacity');
        const message = [
          'Solar AMC Request', '',
          'Customer Name: ' + value('customerName'),
          'Phone: ' + value('phone'),
          'Email: ' + value('email'),
          'Site Location: ' + value('location'),
          'Customer Type: ' + value('customerType'),
          'Solar Capacity: ' + (capacity ? capacity + ' kW' : 'Not provided'),
          'System Type: ' + value('systemType'),
          'Service Required: ' + value('serviceType'),
          'Additional Details: ' + (value('message') || 'None')
        ].join('\n');
        const whatsappNumber = '918669998393';
        status.textContent = 'Opening WhatsApp...';
        window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
      });
      form.addEventListener('reset', function () { status.textContent = ''; });
    }());
