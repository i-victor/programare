//
//  ContentView.swift
//  App
//
//  Created by Ilies Victor on 21/03/2021.
//

import SwiftUI

struct ContentView: View {

    @State var selectedDate = Date()
        
        var closedRange: ClosedRange<Date> {
            let twoDaysAgo = Calendar.current.date(byAdding: .day, value: -2, to: Date())!
            let fiveDaysAgo = Calendar.current.date(byAdding: .day, value: -5, to: Date())!
            
            return fiveDaysAgo...twoDaysAgo
        }
    
    var body: some View {
        Menu("Options") {
            Button("Order Now", action: placeOrder)
            Button("Adjust Order", action: adjustOrder)
            Menu("Advanced") {
                Button("Call", action: callNumber)
                Button("Rename", action: rename)
                Menu("Datepicker") {
                VStack {
                            DatePicker("", selection: $selectedDate, displayedComponents: .date)
                            Text("Your selected date: \(selectedDate)")
                        }.padding()
                        }
                    
                }
            }
            Button("Cancel", action: cancelOrder)
        }
    }

    
    
    func placeOrder() {
        
        
    }
    func adjustOrder() { }
    func rename() { }
    func cancelOrder() { }

//func callNumber(phoneNumber: String) {
func callNumber() {
 // guard let url = URL(string: "telprompt://\(phoneNumber)"),
    guard let url = URL(string: "tel://12345"),
        UIApplication.shared.canOpenURL(url) else {
        return
    }
    UIApplication.shared.open(url, options: [:], completionHandler: nil)
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

