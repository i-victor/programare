//
//  ViewController.swift
//  victors-app
//
//  Created by Ilies Victor on 09.09.2021.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var pricetxt: UITextField!
    @IBOutlet weak var SalesTaxTxt: UITextField!
    @IBOutlet weak var TotalPriceLbl: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        TotalPriceLbl.text = ""
    }

    
    @IBAction func calculateTotalPrice(_ sender: Any) {
        let price = Double(pricetxt.text!)!
        let salesTax = Double(SalesTaxTxt.text!)!
        
        let totalSalesTax = price * salesTax
        let totalPrice = price + totalSalesTax
        TotalPriceLbl.text = "$\(totalPrice)"
    }
    
}

