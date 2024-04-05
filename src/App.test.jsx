import { describe, expect } from "vitest"
import App from "./App";
import userEvent from "@testing-library/user-event";
import { render, screen} from "@testing-library/react";

const multiple= (a,b,c)=>{
    return a*b*c
}

//Bir bileşen veya metodla alakalı birden fazla test olduğu zaman bu testleri gruplandırmak için describe kullanılır.
describe("Fonksiyon Testleri", ()=>{
    test("Fonksiyon doğru çalışıyor mu?", ()=>{
        expect(multiple(10,2,3)).toBe(60)
    });

    test("Fonksiyon negatif sayılar ile doğru çalışıyor mu?", ()=>{
        expect(multiple(-10,-2,-3)).toBe(-60)
    });

    test("Fonksiyon 0 ile doğru çalışıyor mu?", ()=>{
        expect(multiple(-10,0,-3)).toBe(0)
    });
//test yerine it da yazılabilir test=it
})

it('Uygulama doğru şekilde çalışıyor mu?', async () => {
    const user = userEvent.setup();
    render(<App />);
  
    // gerekli elemanları çağır
    const nameInp = screen.getByLabelText('İsim');
    const mailInp = screen.getByLabelText('Email');
    const ageInp = screen.getByLabelText('Yaş');
    const sendBtn = screen.getByRole('button', {
      name: 'Kullanıcı Ekle',
    });
  
    // 1) inputları doldur
    await user.type(nameInp, 'Ali');
    await user.type(mailInp, 'ali@gmail.com');
    await user.type(ageInp, '24');
  
    // 2) kullanıcı ekle butonuna tıkla
    await user.click(sendBtn);
  
    // 3) inputlara girilen verilere uygun tablo hücreleri ekrana basıldı mı?
    screen.getByRole('cell', { name: 'Ali' });
    screen.getByRole('cell', { name: 'ali@gmail.com' });
    screen.getByRole('cell', { name: '24' });
  });
