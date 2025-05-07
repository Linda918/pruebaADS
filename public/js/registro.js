const validator = new JustValidate('#formRegistro');

validator
  .addField('#userName', [
    {
      rule: 'required',
      errorMessage: 'El nombre de usuario es requerido',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Debe tener al menos 3 caracteres',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'No puede tener más de 20 caracteres',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'El correo es obligatorio',
    },
    {
      rule: 'email',
      errorMessage: 'Ingresa un correo válido',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'La contraseña es obligatoria',
    },
    {
      rule: 'password',
      errorMessage: 'Debe contener al menos una mayúscula, una minúscula, un número',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Debe tener al menos 8 caracteres',
    },
  ])
  .addField('#confirmarContrasena', [
    {
      rule: 'required',
      errorMessage: 'Debes confirmar tu contraseña',
    },
    {
      validator: (value, fields) => {
        return value === fields['#password'].elem.value;
      },
      errorMessage: 'Las contraseñas no coinciden',
    },
  ])
  .addField('#terminosCheck', [
    {
      rule: 'required',
      errorMessage: 'Debes aceptar los términos y condiciones',
    },
  ])
  .onSuccess((event) => {
    event.target.submit(); // <- aquí habilitas el envío real
  });
