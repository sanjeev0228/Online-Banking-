package com.icin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.icin.bean.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin, String>{

	
	

}
