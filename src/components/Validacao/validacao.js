
export function validacao(values) {
    const erros = {};
  
    // Validação do campo "username"
    if (!values.username?.trim()) {
      erros.usuario = 'O usuário é obrigatório';
    }
  
    // Validação do campo "email"
    if (!values.email) {
      erros.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      erros.email = 'O e-mail é inválido';
    }
  
    // Validação do campo "password"
    if (!values.senha) {
      erros.senha = 'A senha é obrigatória';
    } else if (values.password.length < 8) {
      erros.senha = 'A senha deve ter pelo menos 8 caracteres';
    }
  
    return erros;
  }
  