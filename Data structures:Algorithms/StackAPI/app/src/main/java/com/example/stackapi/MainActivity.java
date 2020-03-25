package com.example.stackapi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.util.Stack;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /** constructor to initialise a stack using java api **/
        final Stack st = new Stack();

        /** Assigning a listener to the push button **/
        Button push = (Button) findViewById(R.id.push);
        push.setOnClickListener(new View.OnClickListener() {
            @Override
            /** Method to allow for value to be pushed into stack **/
            public void onClick(View v) {
                EditText n1 = (EditText) findViewById(R.id.n1);
                TextView view = (TextView) findViewById(R.id.view);
                int x = Integer.parseInt(n1.getText().toString());

                if (st.size() >= 30) {
                    view.setText(st.toString() + "  STACK IS FULL, NO NEW NUMBERS WILL BE ADDED");
                } else {
                    st.push(x);
                    view.setText(st.toString());
                }
            }
        });

        /** Assigning a listener to the pop button **/
        Button pop = (Button) findViewById(R.id.pop);
        pop.setOnClickListener(new View.OnClickListener() {
            @Override
            /** Method to allow for value to be popped into stack **/
            public void onClick(View v) {
                TextView view = (TextView) findViewById(R.id.view);

                if (st.size() == 0 ){
                    view.setText("No values left to pop");
                } else{
                    st.pop();
                    view.setText(st.toString());
                }
            }
        });

        /** Assigning a listener to the clear button **/
        Button clear = (Button) findViewById(R.id.clear);
        clear.setOnClickListener(new View.OnClickListener() {
            @Override
            /** Method to allow for the stack to be cleared  **/
            public void onClick(View v) {
                TextView view = (TextView) findViewById(R.id.view);
                st.clear();
                view.setText(st.toString());
            }
        });
    }
}

