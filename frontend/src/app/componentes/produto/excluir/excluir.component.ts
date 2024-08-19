import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  produto!: Produto

  constructor(
    private rota: Router, 
    private produtoService: ProdutoService, 
    private dadosNavegacao: ActivatedRoute,
    private dialog: MatDialog){}

  ngOnInit(): void {
    const id = this.dadosNavegacao.snapshot.paramMap.get('id')
    this.produtoService.buscarPorId(+id!).subscribe(produtoPesquisa => {
      this.produto = produtoPesquisa
    })
  }

  /*
  dlgExclusao(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(DialogExclusao, {
      width: '250',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }
*/

  excluir(): void{
    this.produtoService.excluir(+this.produto.id!).subscribe(() => {
      this.produtoService.exibirMensagem('Produto excluido com sucesso!')
      this.rota.navigate(['/produtos'])
    })
  }
  
  cancelar(): void{
    this.rota.navigate(['/produtos'])
  }
}

/*
@Component({
  selector: 'dlg-exclusao',
  templateUrl: './dlg.component.exclusao.html'
})
export class DialogExclusao{
  constructor(public dialogRef: MatDialogRef<DialogExclusao>){}
}
  */