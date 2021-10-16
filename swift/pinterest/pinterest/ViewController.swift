//
//  ViewController.swift
//  pinterest
//
//  Created by Ilies Victor on 15.09.2021.
//

import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
            super.viewDidLoad()
            view.backgroundColor = .red
        }
    
}

class SecondViewController: UIViewController {
    
    let data = ["Food", "Tech", "Art", "Cars", "Home", "Walpapers", "Sport & Fitness", "Nature"]
    
    var filteredData: [String]!
    
    @IBOutlet weak var searchBar: UISearchBar!
    
    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
            super.viewDidLoad()
            view.backgroundColor = .red
            
            filteredData = data
            
        
            tableView.delegate = self
            tableView.dataSource = self
        
        searchBar.delegate = self
            
        }


}
    
extension SecondViewController: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return filteredData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = filteredData[indexPath.row]
        return cell
    }
    
}

extension SecondViewController: UISearchBarDelegate {
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        
        filteredData = []
        
        if searchText == "" {
            filteredData = data
        }
        
        for word in data {
            
            if word.uppercased().contains(searchText.uppercased()) {
                filteredData.append(word)
            }
            
        }
        
        self.tableView.reloadData()
        
    }
    
}

class ThirdViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .red
    }

}

class LastViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = .red
    }

}
