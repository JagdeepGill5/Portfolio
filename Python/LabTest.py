#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Oct 21 11:59:49 2019

@author: JagdeepGill
"""

class Artist:
    """
    Class to represent the artist
    """
    
    def __init__(self):
        """
        Constructor to create attributes
        """        
        self.fname = "not set"
        self.lname = "not set"
        
    def getFirstName(self):
        """
        Returns first name
        """
        return self.fname
    
    def getLastName(self):
        """
        Returns last name
        """
        return self.lname
    
    def setFirstName(self, fn):
        """
        Set the first name
        """
        self.fname = fn
    
    def setLastName(self, ln):
        """
        Set the last name
        """
        self.lname = ln 
        
class MusicTrack:
    """
    Class to represent the artist
    """
    
    def __init__(self, n):
        """
        Constructor to create attributes
        """   
        self.title = "jim"
        self.g = "bob"
        self.artist = n
        self.rtime = 0
        
    def getTitle(self):
        """
        Returns title
        """
        return self.title
    
    def getRTime(self):
        """
        Returns running time
        """
        return self.rtime
    
    def getArtist(self):
        """
        Returns artist
        """
        return self.artist
    
    def setTitle(self, t):
        """
        Set the title
        """
        self.title = t
        
    def setRtime(self, rt):
        """
        Set the running time
        """
        self.rtime = rt
        
    def setArtist(self, a):
        """
        Set the artist
        """
        self.artist = a
        
    def printMusicTrack(self):
        """
        Method to print details of track
        """
        print("The title of the track is: ", self.title + self.g)
        print("The artist's first name is: ", self.artist.fname)
        print("The artist's last name is: ", self.artist.lname)
        print("The runnning time (in minutes) of the track is: ", self.rtime)
    
class MyMusicTrackCollection:
    """
    Class to represent the music track collection
    """
    def __init__(self):
        """
        Constructor to create attributes
        """
        self.cname = "not set"
        self.musictrack = []
        
    def getCName(self):
        """
        Returns collection name
        """
        return self.cname
    
    def setCName(self, cn):
        """
        Set the collection name
        """
        self.cname = cn
    
    def addMusicTrack(self, mt):
        """
        Add in the list of music track and checks for duplicate records
        """
        if mt in self.musictrack:
            print("Music Track is already in your collection!")
        else:
            self.musictrack.append(mt)
            print("Music Track was successfully added to the collection")
        
    def printCdetails(self):
        """
        Method to print details of the music collection
        """
        print("The Music Track Collection name is: ", self.cname)
        print("The Music Tracks in this collection are")
        for mt in self.musictrack:
            mt.printMusicTrack()
        
    def CollectionLength(self):
        """
        Method to check if collection is empty or not
        """
        if len(self.musictrack) == 0:
            print("Music collection is empty!")
        else:
            print("Music collection is not empty")
    
    def printMusicTrackDetails(self, er):
        """
        Method to check and print tracks higher or equal to set value
        """
        for mt in self.musictrack:
            if mt.rtime >= er:
                mt.printMusicTrack()   
                
def test1():
    c1 = MyMusicTrackCollection()
    a1 = Artist()
    mTrack1 = MusicTrack(a1)
    mTrack2 = MusicTrack(a1)
    c1.addMusicTrack(mTrack1)
    c1.addMusicTrack(mTrack1)
    c1.addMusicTrack(mTrack2)
    c1.printCdetails()

def test2():
    c1 = MyMusicTrackCollection()
    a1 = Artist()
    mTrack1 = MusicTrack(a1)
    c1.CollectionLength()
    c1.addMusicTrack(mTrack1)
    c1.CollectionLength()
    
def test3():
    c1 = MyMusicTrackCollection()
    a = Artist()
    m1 = MusicTrack(a)
    m2 = MusicTrack(a)
    m1.setRtime(50)
    c1.addMusicTrack(m1)
    c1.addMusicTrack(m2)
    c1.printMusicTrackDetails(20)
    