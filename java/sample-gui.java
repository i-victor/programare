import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Test implements ActionListener
{
      JTextField first_name;
      JTextField last_name;
      JTextField final_name;

      Test()
      {
            JFrame jfrm = new JFrame("Test Fields");
            jfrm.setLocation(100, 100);
            jfrm.setLayout(new BorderLayout());
            jfrm.setSize(200, 200);
            jfrm.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            first_name = new JTextField(10);
            last_name = new JTextField(10);
            final_name = new JTextField(10);
            final_name.setEditable(false);

            // set input fields
            JPanel inFieldPane = new JPanel();
            inFieldPane.setLayout(new GridLayout(2,2));
            inFieldPane.add(new JLabel("First Name:"));
            inFieldPane.add(first_name);
            first_name.addActionListener(this);
            inFieldPane.add(new JLabel("Last Name:"));
            inFieldPane.add(last_name);
            last_name.addActionListener(this);
            jfrm.add(inFieldPane,BorderLayout.NORTH);

            // set submit button
            JPanel submitPane = new JPanel();
            submitPane.setLayout(new FlowLayout());
            submitPane.add(new JLabel("Press button to enter names"));
            JButton submitButton = new JButton("Submit");
            submitButton.addActionListener(this);
            submitPane.add(submitButton);
            jfrm.add(submitPane,BorderLayout.CENTER);

            // display results
            JPanel outFieldPane= new JPanel();
            outFieldPane.setLayout(new GridLayout(1,2));
            outFieldPane.add(new JLabel("Final Name"));
            outFieldPane.add(final_name);
            jfrm.add(outFieldPane,BorderLayout.SOUTH);

            jfrm.setVisible(true);
      }

      public void actionPerformed(ActionEvent e)
      {
            if(e.getActionCommand().equals("Submit"))
            {
                  String fullString = last_name.getText().trim() + ", "  + first_name.getText().trim();
                  final_name.setText(fullString);
            }
      }

      public static void main(String[] args)
      {
            SwingUtilities.invokeLater(new Runnable()
            {
                  public void run()
                  {
                        new Test();
                  }
            });
      }
}
