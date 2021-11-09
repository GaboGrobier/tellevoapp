package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import com.hemangkumar.capacitorgooglemaps.CapacitorGoogleMaps;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(CapacitorGoogleMaps.class);
  }
}
