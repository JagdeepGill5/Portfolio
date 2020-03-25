package com.example.reversestring;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /** Assigning a listener to the reverse button **/
        Button reverse = (Button) findViewById(R.id.reverse);
        reverse.setOnClickListener(new View.OnClickListener() {
            @Override
            /** Method to allow for String to be reversed **/
            public void onClick(View v) {
                EditText ip = (EditText) findViewById(R.id.input);
                TextView view = (TextView) findViewById(R.id.result);
                String i = ip.getText().toString();
                StringBuilder str = new StringBuilder(i);

                if (str.length() == 0) {
                    view.setText("No String Entered");
                } else {
                    view.setText(str.reverse());
                }
            }
        });
    }
}
