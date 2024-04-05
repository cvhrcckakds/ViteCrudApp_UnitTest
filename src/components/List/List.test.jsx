import { render, screen, within } from '@testing-library/react';
import List from '.';
import { expect, test } from 'vitest';

const testUsers = [
  {
    name: 'Bera',
    mail: 'bera@gmail.com',
    age: 0,
  },
  {
    name: 'Mustafa',
    mail: 'mustafa@gmail.com',
    age: 30,
  },
  {
    name: 'Cevahir',
    mail: 'cevahir@gmail.com',
    age: 30,
  },
];

it('göndeirlen her kullanıcı için ekrana satır basılır', () => {
  render(<List users={testUsers} />);

  // table body alanın seç
  const body = screen.getByTestId('table-body');

  // body kısmındaki bütün satırları al
  // belirli bir kapsayacı içerisndeki elemanlar seçmek için within()
  const rows = within(body).getAllByRole('row');

  // satır sayısı users dizisindeki eleman saysına eşit mi kontrol?
  expect(rows).toHaveLength(testUsers.length);
});

it("Her bir kullanıcı için isim email yaş hücreleri bulunur", ()=>{
    render(<List users={testUsers}/>)

    //dizideki her kullanıcı için ekrana kullanıcının değerini içeren tablo hücresi basılıyor mu
    for(const user of testUsers){
        //Kullanıcı ismini içeren tablo hücresi
        screen.getAllByRole("cell", {name:user.name})
        //Kullanıcı ismini içeren email hücresi
        screen.getAllByRole("cell", {name:user.mail})
        //Kullanıcı ismini içeren yaş hücresi
        screen.getAllByRole("cell", {name:user.age})

    }
})