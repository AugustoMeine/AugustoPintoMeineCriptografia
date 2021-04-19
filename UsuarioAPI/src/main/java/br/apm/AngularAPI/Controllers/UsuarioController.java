package br.apm.AngularAPI.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.apm.AngularAPI.Models.Usuario;
import br.apm.AngularAPI.Repositories.UsuarioRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@Api(value = "Swagger2RestController",description = "API do controle do Usuario no banco de dados")
@RestController
@RequestMapping("/Usuario")
public class UsuarioController {
	@Autowired
	private UsuarioRepository uRepository;
	
	@ApiOperation(value = "Retorna a lista dos Usuario", response = Iterable.class, tags = "getUsuarios")
	@GetMapping
	public List<Usuario> getUsuarios(){
		return(uRepository.findAll());
	}
	
	@ApiOperation(value = "Retorna o Usuario com o id como parâmetro", response = Iterable.class, tags = "getUsuario")
	@GetMapping("/{id}")
	public Optional<Usuario> getUsuario(@PathVariable int idUsuario){
		return(uRepository.findById(idUsuario));
	}
	
	@ApiOperation(value = "Adiciona o Usuario na API", response = Iterable.class, tags = "adicionaUsuario")
	@GetMapping("/Adicionar/{nome}/{login}/{senha}")
	public boolean adicionaUsuario(@PathVariable String nome, @PathVariable String login, @PathVariable String senha){
		List<Usuario> listaUsuario = uRepository.findAll();
		
		for(Usuario aux : listaUsuario) {
			if(aux.getNome().equals(nome) || aux.getLogin().equals(login)) {
				return(false);
			}
		}
		
		Usuario novo = new Usuario();
		
		novo.setNome(nome);
		novo.setLogin(login);
		novo.setSenha(senha);
		uRepository.save(novo);		
		
		return(true);
	}
	
	@ApiOperation(value = "Deleta o Usuario na API com o nome como parâmetro", response = Iterable.class, tags = "deletaUsuario")
	@GetMapping("/Deletar/{nome}")
	public boolean deletaUsuario(@PathVariable String nome){
		List<Usuario> listaUsuario = uRepository.findAll();
		
		for(Usuario aux : listaUsuario) {
			if(aux.getNome().equals(nome)) {
				uRepository.deleteById(aux.getIdUsuario());
				return(true);
			}
		}
		
		return(false);
	}
	
	@ApiOperation(value = "Alterar o Usuario na API com o nome como parâmetro", response = Iterable.class, tags = "alteraUsuario")
	@GetMapping("/Alterar/{nome}/{login}/{senha}")
	public boolean alteraUsuario(@PathVariable String nome, @PathVariable String login, @PathVariable String senha){
		List<Usuario> listaUsuario = uRepository.findAll();
		
		for(Usuario aux : listaUsuario) {
			if(aux.getNome().equals(nome)) {
				aux.setLogin(login);
				aux.setSenha(senha);
				uRepository.save(aux);
				return(true);
			}
		}
		
		return(false);
	}
	
	
}
